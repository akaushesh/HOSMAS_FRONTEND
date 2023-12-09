from django.shortcuts import render
from django.db.models import Q
from django.core.cache import cache

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from student.permissions import *
from dashboard.permissions import IsAdmin

from .models import *
from student.models import *
from .serializers import *

import json
from student.tasks import send_preferences_mail, send_retain_mail, send_preferences_deleted_mail

class getAvailableChoices(APIView):
    permission_classes = [IsAuthenticated, IsStudent]
    
    def get(self, request):
        stud = Student.objects.filter(user=request.user).select_related('batch').first()
        batch = stud.batch
        gender = stud.gender

        section = Section.objects.filter(Q(batch = batch) & Q(gender = gender)).first()
        
        if (section is None or section.is_allotment_enabled==False):
            return Response({'error':'Allotment unavailable'}, status=status.HTTP_400_BAD_REQUEST)

        cachedVal = cache.get(f"choices-{section.id}")
        if cachedVal is not None:
            return Response(json.loads(cachedVal), status=status.HTTP_200_OK)

        roomtypechoices = RoomTypeChoice.objects.filter(section=section).select_related('room_type__hostel').all()
        data = []
        for choice in roomtypechoices:
            room_detail = {
                'choice_id' : choice.id,
                'room_name' : choice.room_type.name,
                'room_hostel' : choice.room_type.hostel.name
            }
            data.append(room_detail)
        cache.set(f"choices-{section.id}", json.dumps(data))
        return Response(data, status=status.HTTP_200_OK)


class createPreference (APIView):
    permission_classes = [IsAuthenticated, IsStudent, IsNotDefaulter, IsNotGroupMember, IsPreferenceFillingLive]
    
    def post(self, request):
        data = request.data
        stud = request.user.student
        batch = stud.batch
        gender = stud.gender
        
        if (not IsGroupLeader.has_permission(self, request, self)):
            Group.objects.create(leader = stud, cg = stud.cg)
            
        group = stud.leader_of_group
        
        group.is_retained = False
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
        d=[]
        for key,value in data['order'].items():
            if (value in used) or (int(value) not in legalChoices):
                return Response({"detail": "Invalid Preference"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                room_type_choice = RoomTypeChoice.objects.get(id = int(value))
                d.append({"preference":key, "room_type_choice":str(room_type_choice.room_type)})
                p = Preference(room_type_choice = room_type_choice, group = group, priority = key )
                p.save()
                used.append(value)
                createdPreferences.append(p)
        serializer = PreferenceSerializer(createdPreferences, many=True)
        group.is_preferences_filled = True
        group.save()
        print(d)
        for member in group.members.all():
            send_preferences_mail.delay(member.user.email, member.name, d)
        send_preferences_mail.delay(group.leader.user.email, group.leader.name, d)
        return Response({'status':'success','data':serializer.data},status=status.HTTP_201_CREATED)
                
                
class Retain(APIView):
    permission_classes = [IsAuthenticated, IsStudent, IsNotDefaulter, IsPreferenceFillingLive, IsNotGroupMember, IsRetainAllowed]
    
    def post(self, request):
        # data = request.data
        stud = Student.objects.filter(user=request.user).select_related('batch', 'leader_of_group', 'current_room').prefetch_related('leader_of_group__members__current_room').first()
        batch = stud.batch
        gender = stud.gender
        
        if (not IsGroupLeader.has_permission(self,request,self)):
            Group.objects.create(leader = stud, cg = stud.cg)
            
        group = stud.leader_of_group
        
        legalChoices = []
        roomChoices = []
        
        section = Section.objects.filter(Q(batch = batch) & Q(gender = gender)).prefetch_related('choices__room_type').first()
        
        
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
        
        # lead_curr = stud.current_room
        # if (lead_curr is None or lead_curr.id not in roomChoices):
        #     return Response({'error':group.leader.name + ' is unable to retain'}, status=status.HTTP_400_BAD_REQUEST)

        # members = group.members.all()
        # for member in members:
        #     member_curr = member.current_room
        #     if (member_curr is None or member_curr.id not in roomChoices):
        #         return Response({'error':member.name + ' is unable to retain'}, status=status.HTTP_400_BAD_REQUEST)

        group.is_retained = True
        group.save()
        for member in group.members.all():
            send_retain_mail.delay(member.user.email, member.name)
        send_retain_mail.delay(group.leader.user.email, group.leader.name)
        return Response({'status':'success'},status=status.HTTP_201_CREATED)


class getPreferences(APIView):
    permission_classes = [IsAuthenticated, IsStudent]
    
    def get(self, request):
        stud = Student.objects.filter(user=request.user).select_related('leader_of_group', 'group').first()
        try:
            group = stud.leader_of_group
        except ObjectDoesNotExist:
            group = stud.group
        
        if group is None:
            res = {
                'status': 'success',
                'data': {
                    'retain': False,
                    'preferences': []
                }
            }
        else:
            p = Preference.objects.filter(group = group).order_by('priority').select_related('room_type_choice__room_type__hostel').all()
            if (p is None):
                return Response({'error':'No preferences found'},status=status.HTTP_400_BAD_REQUEST)
            
            serializer = PreferenceSerializer(p, many=True)
            res = {
                'status':'success',
                'data': {
                    'retain': group.is_retained,
                    'preferences': serializer.data,
                }
            }

        return Response(res, status.HTTP_200_OK)


class deletePreferences(APIView):
    permission_classes = [IsAuthenticated, IsStudent, IsNotGroupMember]
    
    def post(self, request):
        stud = Student.objects.filter(user=request.user).select_related('leader_of_group').first()
        group = stud.leader_of_group
        
        p = Preference.objects.filter(group = group)
        if (p is not None):
            for q in p:
                q.delete()
        group.is_retained = False
        group.is_preferences_filled = False
        
        group.save()
        
        members = group.members.all()
        for member in members:
            send_preferences_deleted_mail.delay(member.user.email, member.name)
        send_preferences_deleted_mail.delay(group.leader.user.email, group.leader.name)
        return Response({'status':'success'},status=status.HTTP_200_OK)


class PreferenceFillingStatusView(APIView):
      permission_classes = [IsAuthenticated, IsStudent]

      def get(self, request):
            student = Student.objects.filter(user=request.user).select_related('batch').first()
            section = Section.objects.filter(batch=student.batch, gender=student.gender).first()
            result = {
                  'is_live': section is not None and section.is_allotment_enabled,
                  'can_retain': section is not None and section.is_retain_allowed
            }
            return Response(result, status=status.HTTP_200_OK)
