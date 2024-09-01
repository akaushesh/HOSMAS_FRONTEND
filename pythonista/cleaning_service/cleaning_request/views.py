from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from config.services import *
from .serializers import *

from config.pagination import ResponsePagination

class getCleaningRequests(APIView):
    def get(self, request):
        cleaning_requests = all_objects(CleaningRequest.objects)
        # print(requests)
        paginator = ResponsePagination()
        paginated_queryset = paginator.paginate_queryset(cleaning_requests, request)
        
        serializer = CleaningRequestSerializer(paginated_queryset, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    