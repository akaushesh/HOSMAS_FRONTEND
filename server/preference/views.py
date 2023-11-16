from django.shortcuts import render
from django.db.models import Q

# Create your views here.

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from student.permissions import *
from dashboard.permissions import IsAdmin
from .models import *
from student.models import *
from .serializers import *

class getAvailableChoices(APIView):
    permission_classes = [IsAuthenticated & IsStudent]
    
    def get(self, request):
        stud = request.user.student
        batch = stud.batch
        gender = stud.gender
        # roomTypeChoices = RoomTypeChoice.objects.filter(Q(batch=batch) & Q(gender=gender))
        section = Section.objects.filter(Q(batch = batch) & Q(gender = gender)).first()
        
        if (section is None or section.is_allotment_enabled==False):
            return Response({'error':'Allotment unavailable'},status=status.HTTP_400_BAD_REQUEST)
        
        roomtypechoices = section.choices.all()
        data = []
        for choice in roomtypechoices:
            room_detail = {
                'choice_id' : choice.id,
                'room_name' : choice.room_type.name,
                'room_hostel' : choice.room_type.hostel.name
            }
            data.append(room_detail)
        return Response(data, status=status.HTTP_200_OK)

class createPreference (APIView):
    permission_classes = [IsAuthenticated & IsStudent & ~IsGroupMember & IsPreferenceFillingLive]
    
    def post(self, request):
        data = request.data
        stud = request.user.student
        batch = stud.batch
        gender = stud.gender
        
        if (not IsGroupLeader.has_permission(self, request, self)):
            Group.objects.create(leader = stud, cg = stud.cg)
            
        group = stud.leader_of_group
        
        group.retain = False
        group.save()
        
        legalChoices = []
        # roomChoices = []
        
        section = Section.objects.filter(Q(batch = batch) & Q(gender = gender)).first()
        
        
        roomTypeChoices = section.choices.all()
        if (section is None or section.is_allotment_enabled==False):
            return Response({'error':'Allotment unavailable'},status=status.HTTP_400_BAD_REQUEST)
        
        for choice in roomTypeChoices:
            legalChoices.append(choice.id)
            # roomChoices.append(choice.room_type.id)
        
        
        used = []
        createdPreferences = []
        
        p = Preference.objects.filter(group = group)
        if (p is not None):
            for q in p:
                q.delete()
        # print("hello")
        # print(legalChoices)
        
        for key,value in data['order'].items():
            if (value in used) or (int(value) not in legalChoices):
                return Response({"detail": "Invalid Preference"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                room_type_choice = RoomTypeChoice.objects.get(id = int(value))
                p = Preference(room_type_choice = room_type_choice, group = group, priority = key )
                p.save()
                used.append(value)
                createdPreferences.append(p)   
        serializer = PreferenceSerializer(createdPreferences, many=True)
                
        return Response({'status':'success','data':serializer.data},status=status.HTTP_201_CREATED)
                
                
class Retain(APIView):
    permission_classes = [IsAuthenticated & IsStudent & IsPreferenceFillingLive & ~IsGroupMember & IsRetainAllowed]
    
    def post(self, request):
        # data = request.data
        stud = request.user.student
        batch = stud.batch
        gender = stud.gender
        
        if (not IsGroupLeader.has_permission(self,request,self)):
            Group.objects.create(leader = stud, cg = stud.cg)
            
        group = stud.leader_of_group
        
        legalChoices = []
        roomChoices = []
        
        section = Section.objects.filter(Q(batch = batch) & Q(gender = gender)).first()
        
        
        roomTypeChoices = section.choices.all()
        if (section is None or section.is_allotment_enabled==False):
            return Response({'error':'Allotment unavailable'},status=status.HTTP_400_BAD_REQUEST)
        
        for choice in roomTypeChoices:
            legalChoices.append(choice.id)
            roomChoices.append(choice.room_type.id)
            
        p = Preference.objects.filter(group = group)
        if (p is not None):
            for q in p:
                q.delete()
        
        lead_curr = group.leader.current_room
        if (lead_curr is None or lead_curr.id not in roomChoices):
            return Response({'error':group.leader.name + ' is unable to retain'}, status=status.HTTP_400_BAD_REQUEST)
        members = group.members.all()
        
        for member in members:
            member_curr = member.current_room
            if (member_curr is None or member_curr.id not in roomChoices):
                return Response({'error':member.name + ' is unable to retain'}, status=status.HTTP_400_BAD_REQUEST)
            
        group.retain = True
        group.save()
        
        return Response({'status':'success'},status=status.HTTP_201_CREATED)
            
        
    

class getPreferences(APIView):
    permission_classes = [IsAuthenticated & IsStudent]
    
    def get(self, request):
        stud = request.user.student
        if (not IsGroupLeader.has_permission(self, request, self)):
            group = stud.group
        else:
            group = stud.leader_of_group
        
        p = Preference.objects.filter(group = group).order_by('priority')
        if (p is None):
            return Response({'error':'No preferences found'},status=status.HTTP_400_BAD_REQUEST)
        
        serializer = PreferenceSerializer(p, many=True)
        return Response({'status':'success','data':serializer.data}, status.HTTP_200_OK)
            

class deletePreferences(APIView):
    permission_classes = [IsAuthenticated & IsStudent & ~IsGroupMember]
    
    def post(self, request):
        stud = request.user.student
        group = stud.leader_of_group
        
        p = Preference.objects.filter(group = group)
        if (p is not None):
            for q in p:
                q.delete()
        
        return Response({'status':'success'},status=status.HTTP_200_OK)


class PreferenceFillingStatusView(APIView):
      permission_classes = [IsAuthenticated & IsStudent]

      def get(self, request):
            student = request.user.student
            section = Section.objects.filter(batch=student.batch, gender=student.gender).first()
            result = {
                  'is_live': section is not None and section.is_allotment_enabled
            }
            return Response(result, status=status.HTTP_200_OK)
