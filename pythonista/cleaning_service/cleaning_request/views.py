import requests
import common_services
import logging

from django.conf import settings
from django.shortcuts import render

from rest_framework import status
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import *
from . import services as cleaning_request_services

from config.services import *
from config.permissions import IsAuthenticated, IsSupervisor
from config.pagination import ResponsePagination

from .models import CleaningRequest, Slot, Worker, Attendance, Feedback

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

        serializer = CleaningRequestSerializer(paginated_queryset, many=True)
        return paginator.get_paginated_response(serializer.data)

    
    
class getSingleCleaningRequest(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        # student_details = request.user['student']
        try:
            jwt_token = request.META.get("HTTP_AUTHORIZATION")
            student_details = requests.get(
            f"{settings.CENTRAL_REPOSITORY_URL}/user/{slug}", headers={"Authorization": jwt_token}
        )
            student_details.raise_for_status()
            student_details = student_details.json()
        except requests.exceptions.RequestException as e:
            raise APIException(f"Failed to fetch student details: {e}")

        cleaning_request = get_object(CleaningRequest.objects, id=slug)
        
        if cleaning_request is None:
            return Response({"detail": "Cleaning request not found."}, status=status.HTTP_404_NOT_FOUND)

        cleaning_request_serializer = CleaningRequestSerializer(cleaning_request)

        response_data = {
            "student_details": student_details,  # Directly copy student details
            "cleaning_request": cleaning_request_serializer.data  # Cleaning request data
        }

        return Response(response_data, status=status.HTTP_200_OK)

class createCleaningRequests(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logger.info(f"Received cleaning request from user: {request.user['username']}")
        data = request.data
        data['student_id'] = request.user['student']['id']
        data['room_id'] = request.user['student']['room']['id']
        data['hostel_id'] = request.user['student']['room']['hostel']['id']
        data['level_id'] = request.user['student']['room']['level']['id']
        data['hostel_name'] = request.user['student']['room']['hostel']['name']
        data['block'] = request.user['student']['room']['block']
        data['room_number'] = request.user['student']['room']['name']

        logger.debug(f"Cleaning request data: {data}")

        # Check if slots and date are provided
        if not data.get('preferred_slots'):
            logger.warning("Preferred slots not provided in the request")
            return Response({"detail": "Please provide preferred slots for cleaning."}, status=status.HTTP_400_BAD_REQUEST)
        if not data.get('date'):
            logger.warning("Date not provided in the request")
            return Response({"detail": "Please provide a date for the cleaning request."}, status=status.HTTP_400_BAD_REQUEST)

        serializer = CleaningRequestSerializer(data=data)
        if serializer.is_valid():
            cleaning_request = serializer.save()
            logger.info(f"Cleaning request created with id: {cleaning_request.id}")
            
            # Attempt to assign a worker
            assigned_worker, assigned_slot, assigned_date = self.assign_worker_to_request(cleaning_request)
            
            if assigned_worker and assigned_slot:
                cleaning_request.worker = assigned_worker
                cleaning_request.slot = assigned_slot
                cleaning_request.date = assigned_date
                cleaning_request.status = 'Assigned'
                cleaning_request.save()
                logger.info(f"Worker assigned to cleaning request {cleaning_request.id}: Worker {assigned_worker.id}, Slot {assigned_slot.id}, Date {assigned_date}")
                return Response({
                    "detail": "Cleaning request created and assigned to a worker.",
                    "data": CleaningRequestSerializer(cleaning_request).data
                }, status=status.HTTP_201_CREATED)
            else:
                logger.info(f"No worker assigned to cleaning request {cleaning_request.id}")
                return Response({
                    "detail": "Cleaning request created, but not assigned to a worker yet.",
                    "data": serializer.data
                }, status=status.HTTP_201_CREATED)
        logger.error(f"Invalid cleaning request data: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def assign_worker_to_request(self, cleaning_request):
        logger.info(f"Attempting to assign worker for cleaning request {cleaning_request.id}")
        workers = common_services.filter_objects(Worker.objects, 
                                                 hostel_id=cleaning_request.hostel_id, 
                                                 is_active=True).all()
        logger.debug(f"Found {workers.count()} active workers in hostel {cleaning_request.hostel_id}")
        
        for worker in workers:
            logger.debug(f"Checking availability for worker {worker.id}")
            attendance = common_services.get_object(Attendance.objects, 
                                                    worker=worker, 
                                                    date=cleaning_request.date)
            
            if attendance and attendance.is_present and cleaning_request.level_id in attendance.levels:
                logger.debug(f"Worker {worker.id} is present and assigned to level {cleaning_request.level_id}")
                for slot_id in cleaning_request.preferred_slots:
                    slot = common_services.get_object(Slot.objects, id=slot_id)
                    logger.debug(f"Checking slot {slot_id} for worker {worker.id}")
                    
                    if self.is_worker_available(worker, slot, cleaning_request.date):
                        logger.info(f"Worker {worker.id} assigned to cleaning request {cleaning_request.id} for slot {slot_id} on {cleaning_request.date}")
                        return worker, slot, cleaning_request.date
            else:
                logger.debug(f"Worker {worker.id} is not available for this request")
        
        logger.warning(f"No available worker found for cleaning request {cleaning_request.id}")
        return None, None, None

    def is_worker_available(self, worker, slot, date):
        assigned_requests = CleaningRequest.objects.filter(worker=worker, slot=slot, date=date).count()
        is_available = assigned_requests <= 5
        logger.debug(f"Worker {worker.id} has {assigned_requests} assignments for slot {slot.id} on {date}. Available: {is_available}")
        return is_available

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
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logger.info(f"Received request to mark cleaning request as complete from user: {request.user['username']}")
        
        request_id = request.data.get('request_id')
        if not request_id:
            logger.warning("Request ID not provided in the request")
            return Response({"detail": "Please provide a request ID."}, status=status.HTTP_400_BAD_REQUEST)

        logger.debug(f"Attempting to fetch cleaning request with ID: {request_id}")
        cleaning_request = common_services.get_object(CleaningRequest.objects, id=request_id)
        
        if not cleaning_request:
            logger.error(f"Cleaning request with ID {request_id} not found")
            return Response({"detail": "Cleaning request not found."}, status=status.HTTP_404_NOT_FOUND)

        logger.debug(f"Cleaning request found: {cleaning_request}")

        # Check if the request belongs to the current user
        if cleaning_request.student_id != request.user['student']['id']:
            logger.warning(f"User {request.user['username']} attempted to complete a request that doesn't belong to them")
            return Response({"detail": "You are not authorized to complete this request."}, status=status.HTTP_403_FORBIDDEN)

        # Check if the request is already completed
        if cleaning_request.status == 'Completed':
            logger.info(f"Cleaning request {request_id} is already marked as complete")
            return Response({"detail": "This request is already marked as complete."}, status=status.HTTP_400_BAD_REQUEST)

        feedback = common_services.get_object(Feedback.objects, request=cleaning_request)
        
        if feedback and (feedback.rating or feedback.comments):
            try:
                feedback.save()
                logger.info(f"Cleaning request {request_id} marked as complete based on existing feedback.")
                return Response({
                    "detail": "Cleaning request marked as complete.",
                    "data": FeedbackSerializer(feedback).data
                }, status=status.HTTP_200_OK)
            except Exception as e:
                logger.error(f"Error occurred while marking request {request_id} as complete: {str(e)}")
                return Response({"detail": "An error occurred while processing your request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            logger.warning(f"No valid feedback found for cleaning request {request_id}. Request will remain incomplete.")
            return Response({"detail": "Feedback is not sufficient to mark this request as complete."}, status=status.HTTP_400_BAD_REQUEST)
