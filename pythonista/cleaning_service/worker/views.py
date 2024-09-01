from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Worker, Attendance
from .serializers import WorkerSerializer, AttendanceSerializer
from datetime import date

# List all workers
@api_view(['GET'])
def worker_list(request):
    workers = Worker.objects.all()
    serializer = WorkerSerializer(workers, many=True)
    return Response(serializer.data)

# Mark attendance for a worker
@api_view(['POST'])
def mark_attendance(request, worker_id):
    worker = Worker.objects.filter(id=worker_id).first()
    if not worker:
        return Response({"detail": "Worker not found."}, status=status.HTTP_404_NOT_FOUND)

    today = date.today()
    attendance, created = Attendance.objects.get_or_create(worker=worker, date=today)
    
    # Toggle attendance status if already exists
    attendance.is_present = not attendance.is_present
    attendance.save()
    
    serializer = AttendanceSerializer(attendance)
    return Response(serializer.data, status=status.HTTP_200_OK)
