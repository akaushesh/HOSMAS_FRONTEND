from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from config.services import *
from .serializers import *
class getCleaningRequests(APIView):
    def get(self, request):
        requests = all_objects(CleaningRequest.objects)
        # data = []
        # for request in requests:
        #     data.append({
        #         'id': request.id,
        #         'student': request.student,
        #         'worker': request.worker,
        #         'slot': request.slot,
        #         'hostel_id': request.hostel_id,
        #         'block': request.block,
        #         'room_number': request.room_number,
        #         'status': request.status
        #     })
        print(requests)
        serializer = CleaningRequestSerializer(requests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    