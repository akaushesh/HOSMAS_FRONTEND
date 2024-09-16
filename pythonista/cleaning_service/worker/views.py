from datetime import datetime

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Worker
from .serializers import *

from config.permissions import IsAuthenticated
from config.services import *


class getMultipleWorkers(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        if (request.user['role'] != 'supervisor'):
            return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)
        workers = filter_objects(Worker.objects, hostel_id=request.user['supervisor']['hostel']['id'])
        serializer = WorkerSerializer(workers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class getSingleWorker(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, slug):
        if (request.user['role'] != 'supervisor' ):
            return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)
        worker = get_object(Worker.objects, id=slug)
        if (worker.hostel_id != request.user['supervisor']['hostel']['id']):
            return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = WorkerSerializer(worker)
        return Response(serializer.data, status=status.HTTP_200_OK)


class createWorker(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        if (request.user['role'] != 'supervisor'):
            return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)
        data = request.data
        data['hostel_id'] = request.user['supervisor']['hostel']['id']
        serializer = WorkerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class markWorkerAttendance(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, worker_id):
        if request.user['role'] != 'supervisor':
            return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)

        worker = get_object(Worker.objects, id=worker_id)
        if not worker or worker.hostel_id != request.user['supervisor']['hostel']['id']:
            return Response({"detail": "Worker not found or unauthorized action."}, status=status.HTTP_404_NOT_FOUND)

        today = date.today()
        attendance = get_object(Attendance.objects, worker=worker, date=today)

        if not attendance:
            attendance = Attendance(worker=worker, date=today, is_present=False)
        attendance.is_present = not attendance.is_present
        attendance.save()

        serializer = AttendanceSerializer(attendance)
        return Response(serializer.data, status=status.HTTP_200_OK)


class HostelWorkersPublicView(APIView):
    def get(self, request, hostel_id):
        base_qs = filter_objects(Worker.objects, is_active=True)
        if hostel_id!=0:
            base_qs = filter_objects(base_qs, hostel_id=hostel_id)
        
        workers_list = []
        for worker in base_qs.all():
            attentance = filter_objects(Attendance.objects, worker=worker, date=datetime.now().date()).first()
            if attentance is not None and attentance.is_present:
                workers_list.append(worker)
        
        serializer = WorkerSerializer(workers_list, many=True, exclude_fields=('hostel_id', 'is_active'))
        return Response(serializer.data, status = status.HTTP_200_OK)
