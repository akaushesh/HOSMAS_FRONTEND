from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CleaningRequest
from worker.models import Worker
from .serializers import CleaningRequestSerializer  # Create this serializer
from django.shortcuts import get_object_or_404

# List all cleaning requests
@api_view(['GET'])
def cleaning_request_list(request):
    cleaning_requests = CleaningRequest.objects.all()
    serializer = CleaningRequestSerializer(cleaning_requests, many=True)
    return Response(serializer.data)

# Assign a list of cleaning requests to a specific worker
@api_view(['POST'])
def assign_cleaning_requests(request, worker_id):
    worker = get_object_or_404(Worker, id=worker_id)
    request_ids = request.data.get('request_ids', [])
    
    if not request_ids:
        return Response({"detail": "No cleaning requests provided."}, status=status.HTTP_400_BAD_REQUEST)
    
    cleaning_requests = CleaningRequest.objects.filter(id__in=request_ids)
    
    if not cleaning_requests.exists():
        return Response({"detail": "No matching cleaning requests found."}, status=status.HTTP_404_NOT_FOUND)
    
    for cleaning_request in cleaning_requests:
        cleaning_request.worker = worker
        cleaning_request.status = 'Assigned'
        cleaning_request.save()
    
    return Response({"detail": "Cleaning requests assigned successfully."}, status=status.HTTP_200_OK)
