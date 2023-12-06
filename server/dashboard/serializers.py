from django.db.models import Q, Count
from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch, Section, Student, Group, Defaulter
from student.serializers import StudentProfileSerializer, StudentProfileRoomTypeSerializer
from user.models import User
from .models import AllotmentStatus, AcademicSession, Faq, AllotmentLogsGroup, AllotmentLogsStudent
import json, string
from .tasks import send_start_allocation_mail
from random import choice
from collections import OrderedDict


class HostelSerializer(serializers.ModelSerializer):
      # Serializer for representing data of all hostels

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender']


class RoomTypeSerializer(serializers.ModelSerializer):
      # Serializer to represent data to admin on hostel side

      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel', 'room_size', 'rooms_count']
            extra_kwargs = {
                  'hostel': {'write_only': True}
            }


class HostelSingleSerializer(serializers.ModelSerializer):
      # Serializer for representing data of single hostel

      room_types = RoomTypeSerializer(read_only=True, many=True)
      capacity = serializers.SerializerMethodField()

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender', 'caretaker_email', 'caretaker_name', 'room_types', 'capacity']
      
      def get_capacity(self, obj):
            cnt = 0
            for roomtype in obj.room_types.all():
                  cnt += roomtype.room_size * roomtype.rooms_count
            return cnt


class RoomTypeChoiceSerializer(serializers.ModelSerializer):
      room_type_name = serializers.SerializerMethodField()
      hostel = serializers.SerializerMethodField()

      class Meta:
            model = RoomTypeChoice
            fields = ['id', 'hostel', 'room_type', 'room_type_name', 'section', 'capacity']
            extra_kwargs = {
                  'room_type': {'write_only': True},
                  'section': {'write_only': True},
            }
      
      def get_room_type_name(self, obj):
            return obj.room_type.name
      
      def get_hostel(self, obj):
            return obj.room_type.hostel.name


class RoomTypeOptionSerializer(serializers.ModelSerializer):
      # Serializer to respresent data to admin about room types availble for allotment

      hostel = serializers.SlugRelatedField(
            slug_field='name',
            read_only=True
      )

      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel']


class BatchUninitializedSerializer(serializers.ModelSerializer):
      # Serializer for 'Manage Preferences' section route

      gender = serializers.SerializerMethodField()

      class Meta:
            model = Batch
            fields = ['id', 'name', 'gender']
      
      def get_gender(self, obj):
            res = []
            if not Section.objects.filter(batch=obj, gender='F').exists():
                  res.append('F')
            if not Section.objects.filter(batch=obj, gender='M').exists():
                  res.append('M')
            return res


class BatchSerializer(serializers.ModelSerializer):
      # Serializer for 'Manage Batches' section routes

      count = serializers.SerializerMethodField()

      class Meta:
            model = Batch
            fields = ['id', 'name', 'count']
      
      def get_count(self, obj):
            return obj.students.count()


class SectionSerializer(serializers.ModelSerializer):
      batch_name = serializers.SerializerMethodField()
      class Meta:
            model = Section
            fields = ['id', 'batch_name', 'batch', 'gender', 'is_allotment_result_public', 'is_allotment_enabled', 'is_retain_allowed', 'group_size_limit']
            extra_kwargs = {
                  'batch': {'write_only': True}
            }
      
      def get_batch_name(self, obj):
            return obj.batch.name
      
      def update(self, instance, validated_data):
            # Check allotment enable/disable status and if enabled, send mails
            updated_allotment_status = validated_data.get('is_allotment_enabled')
            if updated_allotment_status is not None:
                  if not instance.is_allotment_enabled and updated_allotment_status:
                        # Send mails to all section's students    
                        groups = Group.objects.filter(Q(leader__batch = instance.batch)
                                                      & Q(leader__gender = instance.gender)).all()
                        for group in groups:
                              for student in group.members.all():
                                    send_start_allocation_mail.delay(student.name, student.user.email)
                              send_start_allocation_mail.delay(group.leader.name, group.leader.user.email)
                        print('Send Mails!')
                  instance.is_allotment_enabled = updated_allotment_status

            # Check allotment result status and if made public, finalize result
            updated_allotment_result_status = validated_data.get('is_allotment_result_public')
            if updated_allotment_result_status is not None:
                  if not instance.is_allotment_result_public and updated_allotment_result_status:
                        students = Student.objects.filter(batch=instance.batch, gender=instance.gender, preview_room__is_null=False, alloted_room__is_null=True).all()
                        for student in students:
                              student.alloted_room  = student.preview_room
                              student.preview_room = None
                              student.save()
                  instance.is_allotment_result_public = updated_allotment_result_status

            instance.is_retain_allowed = validated_data.get('is_retain_allowed', instance.is_retain_allowed)
            instance.save()
            
            return instance
      

class SectionRoomTypeSerializer(serializers.ModelSerializer):
    batch_name = serializers.SerializerMethodField()
    room_choices = RoomTypeChoiceSerializer(source='choices', many=True, read_only=True)

    class Meta:
        model = Section
        fields = ['id', 'batch_name', 'gender', 'room_choices', 'is_allotment_enabled']

    def get_batch_name(self, obj):
        return obj.batch.name


class ProfileSerializer(serializers.ModelSerializer):
      class Meta:
            model = User
            fields = ['email']


class AllotmentLogsStudentSerializer(serializers.ModelSerializer):
      preview_room_type = StudentProfileRoomTypeSerializer(read_only=True)
      
      class Meta:
            model = AllotmentLogsStudent
            fields = ['rollno', 'name', 'email', 'phoneno', 'cg', 'preview_room_type']


class AllotmentLogsGroupSerializer(serializers.ModelSerializer):
      leader = AllotmentLogsStudentSerializer(read_only=True)
      members = AllotmentLogsStudentSerializer(read_only=True, many=True)
      
      class Meta:
            model = AllotmentLogsStudent
            fields = ['leader', 'cg', 'members']


class AllotmentStatusSerializer(serializers.ModelSerializer):
      pending_groups = AllotmentLogsGroupSerializer(read_only=True, many=True)
      sections = SectionSerializer(read_only=True, many=True)

      class Meta:
            model = AllotmentStatus
            fields = '__all__'


class AcademicSessionSerializer(serializers.ModelSerializer):
      class Meta:
            model = AcademicSession
            fields = ['name']


class FAQSerializer(serializers.ModelSerializer):
      
      class Meta:
            model = Faq
            fields = ['id', 'question', 'answer']


class GroupDetailSerializer(serializers.ModelSerializer):
      leader_of_group = StudentProfileSerializer(source='leader', read_only=True)
      members = StudentProfileSerializer(many=True, read_only=True)

      class Meta:
            model = Group
            fields = ['leader_of_group', 'members', 'cg', 'is_retained', 'is_preferences_filled']


class DefaulterSerializer(serializers.ModelSerializer):
      student_name = serializers.SerializerMethodField()
      student_email = serializers.SerializerMethodField()
      student_rollno = serializers.SerializerMethodField()
      
      class Meta:
            model = Defaulter
            fields = ['id', 'student', 'student_name', 'student_rollno', 'student_email']
            extra_kwargs = {
                  'student': {'write_only': True}
            }

      def get_student_name(self, obj):
            return obj.student.name
      
      def get_student_rollno(self, obj):
            return obj.student.rollno
      
      def get_student_email(self, obj):
            return obj.student.user.email
