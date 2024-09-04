from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from config.services import *
from config.permissions import IsAuthenticated
from .models import Worker
from .serializers import *

class getMultipleWorkers(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        if (request.user['role'] != 'supervisor'):
            return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)
        workers = filter_objects(Worker.objects, id=request.user['supervisor']['hostel']['id'])
        serializer = WorkerSerializer(workers)
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