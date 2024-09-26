from asgiref.sync import async_to_sync
from datetime import datetime
from channels.layers import get_channel_layer
import logging, requests

from django.conf import settings
from django.db import transaction
from django.db.models import Q
from django.shortcuts import render

from rest_framework import status
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import CleaningRequest, Feedback
from .serializers import *
from . import services as cleaning_request_services

from config.services import *
from config.permissions import IsAuthenticated, IsSupervisor, IsStudent
from config.pagination import ResponsePagination
from slots.models import Slot
from worker.models import Attendance, Worker

logger = logging.getLogger(__name__)


class getCleaningRequests(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        filters = request.query_params.dict()

        page = filters.pop('page', None)
        page_size = filters.pop('page_size', None)

        if request.user['role'] == 'student':
            cleaning_requests = filter_objects(CleaningRequest.objects, **filters, student_id=request.user['student']['id'])
        elif request.user['role'] == 'supervisor':
            cleaning_requests = filter_objects(CleaningRequest.objects, **filters, hostel_id=request.user['supervisor']['hostel']['id'])

        paginator = ResponsePagination()
        paginated_queryset = paginator.paginate_queryset(cleaning_requests, request)

        serializer = CleaningRequestSerializer(paginated_queryset, many=True, exclude_fields=('student_id', 'room_id', 'hostel_id', 'level_id'))
        return paginator.get_paginated_response(serializer.data)

   
class getSingleCleaningRequest(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        cleaning_request = get_object(CleaningRequest.objects, id=slug)
        
        if cleaning_request is None:
            return Response({"detail": "Cleaning request not found."}, status=status.HTTP_404_NOT_FOUND)

        cleaning_request_serializer = CleaningRequestSerializer(cleaning_request, exclude_fields=('student_id', 'room_id', 'hostel_id', 'level_id'))

        if request.user['role']=='supervisor':
            try:
                jwt_token = request.META.get("HTTP_AUTHORIZATION")
                student_details_req = requests.get(
                    f"{settings.CENTRAL_REPOSITORY_URL}/user/student/{cleaning_request.student_id}", headers={"Authorization": jwt_token}
                )
                student_details_req.raise_for_status()
                student_details = student_details_req.json()
            except requests.exceptions.RequestException as e:
                raise APIException(f"Failed to fetch student details: {e}")
        else:
            student_details = None

        response_data = {
            "student_details": student_details,  # Directly copy student details
            "cleaning_request": cleaning_request_serializer.data  # Cleaning request data
        }

        return Response(response_data, status=status.HTTP_200_OK)


class createCleaningRequests(APIView):
    permission_classes = [IsAuthenticated, IsStudent]

    def post(self, request):
        logger.info(f"Received cleaning request from user: {request.user['student']['name']}")
        data = request.data
        data['student_id'] = request.user['student']['id']
        data['room_id'] = request.user['student']['room']['id']
        data['hostel_id'] = request.user['student']['room']['hostel']['id']
        data['level_id'] = request.user['student']['room']['level']['id']
        data['hostel_name'] = request.user['student']['room']['hostel']['name']
        data['level'] = request.user['student']['room']['level']['name']
        data['block'] = request.user['student']['room']['block']['name']
        data['room_number'] = request.user['student']['room']['name']

        logger.debug(f"Cleaning request data: {data}")

        if CleaningRequest.objects.filter(Q(room_id=data['room_id']), ~Q(status='Completed')).exists():
            logger.warning("There is already a pending request for this room")
            return Response({"detail": "There is already a pending request for this room"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if slots and date are provided
        if not data.get('preferred_slots'):
            logger.warning("Preferred slots not provided in the request")
            return Response({"detail": "Please provide preferred slots for cleaning."}, status=status.HTTP_400_BAD_REQUEST)
        if not data.get('preferred_dates'):
            logger.warning("Dates not provided in the request")
            return Response({"detail": "Please provide dates for the cleaning request."}, status=status.HTTP_400_BAD_REQUEST)
        if len(data['preferred_dates']) != len(data['preferred_slots']):
            logger.warning("Length of slots is not equal to length of dates in the request")
            return Response({"detail": "Please make sure the length of dates is equal to length of slots."}, status=status.HTTP_400_BAD_REQUEST)
        if len(data['preferred_slots']) != 3:
            logger.warning("Length of slots is not equal to 3")
            return Response({"detail": "Please make sure that there are 3 slots in a cleaning request."}, status=status.HTTP_400_BAD_REQUEST)
        
        for i in range(3):
            slot_id = data['preferred_slots'][i]
            slot = filter_objects(Slot.objects, id=slot_id).first()
            if slot is None:
                logger.warning(f"No slot found with id {slot_id}")
                return Response({"detail": f"No slot found with id {slot_id}"}, status=status.HTTP_400_BAD_REQUEST)
            slot_time = datetime.strptime(f"{data['preferred_dates'][i]} {slot.start.strftime('%H:%M')}", "%Y-%m-%d %H:%M")
            if slot_time <= datetime.now():
                logger.warning(f"Slot time {slot_time} for slot {slot_id} and date {data['preferred_dates'][i]} is a past time. Current time is {datetime.now()}")
                return Response({"detail": f"Slot time {slot_time} for slot {slot_id} and date {data['preferred_dates'][i]} is a past time."}, status=status.HTTP_400_BAD_REQUEST)

        serializer = CleaningRequestSerializer(data=data)
        if serializer.is_valid():
            cleaning_request = serializer.save()
            logger.info(f"Cleaning request created with id: {cleaning_request.id}")
            
            # Attempt to assign a worker
            cleaning_request_services.assign_worker_to_request(logger, cleaning_request)
            
            return Response({
                "detail": "Cleaning request created",
                "data": CleaningRequestSerializer(cleaning_request).data
            }, status=status.HTTP_201_CREATED)

        logger.error(f"Invalid cleaning request data: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AssignFloorsToWorkersView(APIView):
    permission_classes = [IsAuthenticated, IsSupervisor]

    def get(self, request):
        cleaning_request_services.assign_floors_to_workers(request.user['supervisor']['hostel']['id'])
        return Response(status=status.HTTP_200_OK)


class AssignRequestsToWorkersView(APIView):
    permission_classes = [IsAuthenticated, IsSupervisor]

    def get(self, request):
        cleaning_request_services.assign_requests_to_workers(request.user['supervisor']['hostel']['id'])
        return Response(status=status.HTTP_200_OK)


class MarkRequestComplete(APIView):
    permission_classes = [IsAuthenticated, IsStudent]

    def post(self, request):
        logger.info(f"Received request to mark cleaning request as complete from user: {request.user['student']['name']}")

        cleaning_request = filter_objects(CleaningRequest.objects, room_id=request.user['student']['room']['id'], status='Assigned').last()
        
        if not cleaning_request:
            logger.error(f"No suitable cleaning request found for room id {request.user['student']['room']['id']}")
            return Response({"detail": "No Cleaning Request found."}, status=status.HTTP_404_NOT_FOUND)

        logger.debug(f"Cleaning request found: {cleaning_request}")

        # Check if the request is already completed
        if cleaning_request.status == 'Completed':
            logger.info(f"Cleaning request {cleaning_request.id} is already marked as complete")
            return Response({"detail": "This request is already marked as complete."}, status=status.HTTP_400_BAD_REQUEST)
        
        comments = request.data.get('comments', '')
        rating = request.data.get('rating')
        if rating is None:
            logger.warning("Rating not provided in the request")
            return Response({"detail": "Please provide a rating."}, status=status.HTTP_400_BAD_REQUEST)

        with transaction.atomic():
            feedback = Feedback.objects.create(request=cleaning_request, comments=comments, rating=rating)

            cleaning_request.status = "Completed"
            cleaning_request.save()
        
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(str(cleaning_request.worker.id), {
            'type': 'request.done',
            'id': cleaning_request.id,
        })

        logger.info(f"Cleaning request {cleaning_request.id} marked as complete with given feedback.")
        return Response({
            "detail": "Cleaning request marked as complete.",
            "data": FeedbackSerializer(feedback).data
        }, status=status.HTTP_200_OK)
