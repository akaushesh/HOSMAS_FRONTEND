from django.db.models import Q, Count
from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from preference.models import Hostel, RoomType, RoomTypeChoice, Room
from student.models import Batch, Section, Student, Group, Defaulter
from student.serializers import StudentProfileSerializer, StudentProfileRoomTypeSerializer
from user.models import User
from .models import AllotmentStatus, AcademicSession, Faq, AllotmentLogsGroup, AllotmentLogsStudent
import json, string
from .tasks import start_preference_filling, release_allotment_results
from random import choice
from collections import OrderedDict
from user.models import ResetSlug


class HostelSerializer(serializers.ModelSerializer):
      # Serializer for representing data of all hostels

      capacity = serializers.SerializerMethodField()
      rooms_count = serializers.SerializerMethodField()
      levels_count = serializers.SerializerMethodField()

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender', 'photos', 'capacity', 'levels_count', 'rooms_count', 'warden_name', 'warden_email', 'warden_phone_number', 'warden_photo', 'day_caretaker_name', 'day_caretaker_email', 'day_caretaker_phone_number', 'night_caretaker_name', 'night_caretaker_email', 'night_caretaker_phone_number']
      
      def get_capacity(self, obj):
            cnt = 0
            for roomtype in obj.room_types.all():
                  cnt += roomtype.room_size * roomtype.rooms_count
            return cnt
      
      def get_rooms_count(self, obj):
            cnt = 0
            for roomtype in obj.room_types.all():
                  cnt += roomtype.rooms_count
            return cnt
      
      def get_levels_count(self, obj):
            return obj.levels.count()


class RoomTypeSerializer(serializers.ModelSerializer):
      # Serializer to represent data to admin on hostel side

      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel', 'room_size', 'rooms_count', 'photo']
            extra_kwargs = {
                  'hostel': {'write_only': True}
            }


class RoomSerializer(serializers.ModelSerializer):
      # Serializer to represent data to admin on room side

      class Meta:
            model = Room
            fields = ['id', 'room_type', 'level', 'room_no', 'current_capacity']
            extra_kwargs = {
                  'room_type': {'write_only': True},
                  'level': {'write_only': True}
            }

class HostelSingleSerializer(serializers.ModelSerializer):
      # Serializer for representing data of single hostel

      room_types = RoomTypeSerializer(read_only=True, many=True)
      capacity = serializers.SerializerMethodField()
      rooms_count = serializers.SerializerMethodField()
      levels_count = serializers.SerializerMethodField()

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender', 'room_types', 'capacity', 'levels_count', 'rooms_count', 'description', 'photos', 'warden_name', 'warden_email', 'warden_phone_number', 'warden_photo', 'day_caretaker_name', 'day_caretaker_email', 'day_caretaker_phone_number', 'night_caretaker_name', 'night_caretaker_email', 'night_caretaker_phone_number']
      
      def get_capacity(self, obj):
            cnt = 0
            for roomtype in obj.room_types.all():
                  cnt += roomtype.room_size * roomtype.rooms_count
            return cnt
      
      def get_rooms_count(self, obj):
            cnt = 0
            for roomtype in obj.room_types.all():
                  cnt += roomtype.rooms_count
            return cnt
      
      def get_levels_count(self, obj):
            return obj.levels.count()


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
            fields = ['id', 'name', 'hostel', 'photo']


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
            fields = ['id', 'batch_name', 'batch', 'gender', 'is_allotment_result_public', 'is_allotment_enabled', 'is_retain_allowed', 'is_room_allotment_enabled', 'group_size_limit']
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
                        start_preference_filling.delay(instance.id)
                  instance.is_allotment_enabled = updated_allotment_status

            # Check allotment result status and if made public, finalize result
            updated_allotment_result_status = validated_data.get('is_allotment_result_public')
            if updated_allotment_result_status is not None:
                  if not instance.is_allotment_result_public and updated_allotment_result_status:
                        release_allotment_results.delay(instance.id, self.context.get('fee_submission_deadline'), self.context.get('reporting_information'))
                  instance.is_allotment_result_public = updated_allotment_result_status

            instance.is_room_allotment_enabled = validated_data.get('is_room_allotment_enabled', instance.is_room_allotment_enabled)
            instance.is_retain_allowed = validated_data.get('is_retain_allowed', instance.is_retain_allowed)
            instance.group_size_limit = validated_data.get('group_size_limit', instance.group_size_limit)
            
            instance.save()
            
            return instance
      

class SectionRoomTypeSerializer(serializers.ModelSerializer):
    batch_name = serializers.SerializerMethodField()
    room_choices = RoomTypeChoiceSerializer(source='choices', many=True, read_only=True)

    class Meta:
        model = Section
        fields = ['id', 'batch_name', 'gender', 'room_choices', 'is_allotment_enabled', 'is_retain_allowed', 'group_size_limit', 'is_allotment_result_public']

    def get_batch_name(self, obj):
        return obj.batch.name


class ProfileSerializer(serializers.ModelSerializer):
      class Meta:
            model = User
            fields = ['email']


class AllotmentLogsStudentSerializer(serializers.ModelSerializer):
      preview_room_type = StudentProfileRoomTypeSerializer(read_only=True, source='preview_room')
      
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
            fields = ['name', 'fee_structure_url']


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
