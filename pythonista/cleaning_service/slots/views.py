from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from config.services import *
from .serializers import *
from config.permissions import IsAuthenticated

class getSlots(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        #user = request.user
        if request.user['role'] == 'student':
            slots = filter_objects(Slot.objects, hostel_id=request.user['student']['room']['hostel']['id'])
        else:
            slots = filter_objects(Slot.objects, hostel_id=request.user['supervisor']['hostel']['id'])
        serializer = SlotSerializer(slots, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
class createSlot(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        if request.user['role'] != 'supervisor':
            return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)
        data = request.data
        data['hostel_id'] = request.user['supervisor']['hostel']['id']
        serializer = SlotSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        