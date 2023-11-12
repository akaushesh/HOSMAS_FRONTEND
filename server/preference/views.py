from django.shortcuts import render
from django.db.models import Q

# Create your views here.

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from student.permissions import IsStudent, IsGroupLeader, IsGroupMember
from .models import *
from student.models import *

class getAvailableChoices(APIView):
    permission_classes = [IsAuthenticated & IsStudent]
    
    def get(self, request):
        stud = request.user.student
        batch = stud.batch
        gender = stud.gender
        roomTypeChoices = RoomTypeChoice.objects.filter(Q(batch=batch) & Q(gender=gender))
        
        data = []
        for choice in roomTypeChoices:
            room_detail = {
                'room_id' : choice.room_type.id,
                'room_name' : choice.room_type.name,
                'room_hostel' : choice.room_type.hostel.name
            }
            data.append(room_detail)
        return Response(data, status=status.HTTP_200_OK)

class CreatePreference (APIView):
    permission_classes = [IsAuthenticated & IsStudent & ~IsGroupMember]
    
    def post(self, request):
        data = request.data
        stud = request.user.student
        batch = stud.batch
        gender = stud.gender
        
        if (not IsGroupLeader.has_permission(self,request)):
            Group.objects.create(leader = stud, cg = stud.cg)
            
        group = stud.leader_of_group
        
        legalChoices = []
        
        roomTypeChoices = RoomTypeChoice.objects.filter(Q(batch=batch) & Q(gender=gender))
        
        for choice in roomTypeChoices:
            legalChoices.append(choice.room_type.id)
        
        used = []
        
        
        p = Preference.objects.filter(group = group)
        if (p is not None):
            for q in p:
                q.delete()
        
        for key,value in data['order'].items():
            if (value in used) or (int(value) not in legalChoices):
                return Response({"detail": "Invalid Preference"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                room = RoomType.objects.get(id = int(value))
                Preference.objects.create(room_type_choice = room, group = group, priority = key )
                used.append(value)
                
        return Response({'status':'success'},status=status.HTTP_200_OK)
                
    
