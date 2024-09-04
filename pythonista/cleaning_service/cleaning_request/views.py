from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import *

from config.services import *
from config.permissions import IsAuthenticated
from config.pagination import ResponsePagination

class getCleaningRequests(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        filters = request.query_params.dict()
        if (request.user['role'] == 'student'):
            cleaning_requests = filter_objects(CleaningRequest.objects, **filters, student_id=request.user['student']['id'])
        elif (request.user['role'] == 'supervisor'):
            cleaning_requests = filter_objects(CleaningRequest.objects, **filters, hostel_id=request.user['supervisor']['hostel']['id'])
        paginator = ResponsePagination()
        paginated_queryset = paginator.paginate_queryset(cleaning_requests, request)
        
        serializer = CleaningRequestSerializer(paginated_queryset, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    
class getSingleCleaningRequest(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, slug):
        #todo: get the student details and return it
        cleaning_request = get_object(CleaningRequest.objects, id=slug)
        serializer = CleaningRequestSerializer(cleaning_request)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class createCleaningRequests(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        #student id
        data = request.data
        data['student_id'] = request.user['student']['id']
        data['hostel_id'] = request.user['student']['room']['hostel']['id']
        data['hostel_name'] = request.user['student']['room']['hostel']['name']
        data['block'] = request.user['student']['room']['block']
        data['room_number'] = request.user['student']['room']['name']
        
        serializer = CleaningRequestSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class assignCleaningRequests(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, worker_id):
        worker = get_object(Worker.objects, id=worker_id)
        if not worker:
            return Response({"detail": "Worker not found."}, status=status.HTTP_404_NOT_FOUND)
        
        request_ids = request.data.get('request_ids', [])
        if not request_ids:
            return Response({"detail": "No cleaning requests provided."}, status=status.HTTP_400_BAD_REQUEST)

        cleaning_requests = filter_objects(CleaningRequest.objects, id__in=request_ids)

        if not cleaning_requests.exists():
            return Response({"detail": "No matching cleaning requests found."}, status=status.HTTP_404_NOT_FOUND)

        for cleaning_request in cleaning_requests:
            cleaning_request.worker = worker
            cleaning_request.status = 'Assigned'
            cleaning_request.save()

        return Response({"detail": "Cleaning requests assigned successfully."}, status=status.HTTP_200_OK)
