from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import *

from config.services import *

from config.pagination import ResponsePagination

class getCleaningRequests(APIView):
    def get(self, request):
        filters = request.query_params.dict()
        cleaning_requests = filter_objects(CleaningRequest.objects, **filters)
        # print(requests)
        paginator = ResponsePagination()
        paginated_queryset = paginator.paginate_queryset(cleaning_requests, request)
        
        serializer = CleaningRequestSerializer(paginated_queryset, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    
class getSingleCleaningRequest(APIView):
    def get(self, request, slug):
        #todo: get the student details and return it
        cleaning_request = get_object(CleaningRequest.objects, id=slug)
        serializer = CleaningRequestSerializer(cleaning_request)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class createCleaningRequests(APIView):
    def post(self, request):
        #student id
        data = request.data
        serializer = CleaningRequestSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)