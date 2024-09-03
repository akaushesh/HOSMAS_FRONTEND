from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from config.services import *
from serializers import *

class getSlots(APIView):
    def get(self, request):
        #user = request.user
        #slots = all_objects(Slot.objects, hostel_id=user.student.hostel.id)
        slots = filter_objects(Slot.objects, hostel_id = request.data.get('hostel_id')) # to be replaced later after integration
        serializer = SlotSerializer(slots, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
class createSlot(APIView):
    def post(self, request):
        data = request.data
        serializer = SlotSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        