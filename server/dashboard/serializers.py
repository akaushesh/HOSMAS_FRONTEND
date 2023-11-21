from django.db.models import Q, Count
from rest_framework import serializers
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch, Section, Student, Group
from student.serializers import StudentProfileSerializer
from user.models import User
from .models import AllotmentStatus, AcademicSession, Faq
import json


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
            fields = ['id', 'batch_name', 'batch', 'gender', 'is_allotment_enabled']
            extra_kwargs = {
                  'batch': {'write_only': True}
            }
      
      def get_batch_name(self, obj):
            return obj.batch.name
      

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


class AllotmentStatusSerializer(serializers.ModelSerializer):
      student_statistics = serializers.SerializerMethodField()
      section_statistics = serializers.SerializerMethodField()

      class Meta:
            model = AllotmentStatus
            fields = ['is_public', 'student_statistics', 'section_statistics']

      def get_student_statistics(self, obj):
            if not obj.done:
                  return {}
            retain_queryset = Student.objects.filter((Q(leader_of_group__is_null=False) & Q(leader_of_group__is_retained=True)) | (Q(group__is_null=False) & Q(group__is_retained=True)))
            unsuccessful_retain = retain_queryset.filter(Q(allocated_room__is_null=True)).count()
            successful_retain = retain_queryset.filter(Q(allocated_room__is_null=False)).count()

            preferences_leader_queryset = Student.objects.filter(Q(leader_of_group__is_null=False)).annotate(
                  preferences_count = Count('leader_of_group__preferences')
            ).filter(Q(preferences_count_gt=0))
            
            preferences_members_queryset = Student.objects.filter(Q(group__is_null=False)).annotate(
                  preferences_count = Count('group__preferences')
            ).filter(Q(preferences_count_gt=0))

            successful_preferences = preferences_leader_queryset.filter(alloted_room__is_null=False).count() + preferences_members_queryset.filter(alloted_room__is_null=False).count()
            unsuccessful_preferences = preferences_leader_queryset.filter(alloted_room__is_null=True).count() + preferences_members_queryset.filter(alloted_room__is_null=True).count()

            return {
                  'successful_retain_allotment': successful_retain,
                  'unsuccessful_retain_allotment': unsuccessful_retain,
                  'successfully_preference_allotment': successful_preferences,
                  'unsuccessful_preference_allotment': unsuccessful_preferences,
            }
      
      def get_section_statistics(self, obj):
            if not obj.done:
                  return []
            res = []
            sections = Section.objects.all()
            for section in sections:
                  for choice in section.choices.all():
                        room_type = choice.room_type
                        cnt = Student.objects.filter(batch=section.batch, gender=section.gender, alloted_hostel=room_type).count()
                        res.append({
                              'batch': section.batch.name,
                              'gender': section.gender,
                              'available_count': choice.capacity,
                              'alloted_count': cnt
                        })
            return res


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