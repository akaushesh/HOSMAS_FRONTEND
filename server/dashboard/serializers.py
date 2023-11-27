from django.db.models import Q, Count
from django.db import transaction
from rest_framework import serializers
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch, Section, Student, Group, Defaulter
from student.serializers import StudentProfileSerializer
from user.models import User
from .models import AllotmentStatus, AcademicSession, Faq
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
            fields = ['id', 'batch_name', 'batch', 'gender', 'is_allotment_enabled', 'is_retain_allowed']
            extra_kwargs = {
                  'batch': {'write_only': True}
            }
      
      def get_batch_name(self, obj):
            return obj.batch.name
      
      def update(self, instance, validated_data):
            updated_allotment_status = validated_data.get('is_allotment_enabled')
            if updated_allotment_status is not None:
                  if not instance.is_allotment_enabled and updated_allotment_status:
                        # TODO: Send mails to all section's students    
                        groups = Group.objects.filter(Q(leader__batch = instance.batch)
                                                      & Q(leader__gender = instance.gender)).all()
                        for group in groups:
                              for student in group.members.all():
                                    send_start_allocation_mail.delay(student.name, student.user.email)
                              send_start_allocation_mail.delay(group.leader.name, group.leader.user.email)
                        print('Send Mails!')
                  instance.is_allotment_enabled = updated_allotment_status
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


class StudentAdminSideUserSerializer(serializers.ModelSerializer):
      # nested serializer for handling user email in admin side student view

      class Meta:
            model = User
            fields = ['email']


class StudentAdminSideBatchSerializer(serializers.ModelSerializer):
      # nested serializer for handling student batch in admin side student view

      class Meta:
            model = Batch
            fields = ['id', 'name']
            extra_kwargs = {
                  'name': {'read_only': True},
                  'id': {'read_only': False}
            }


class StudentAdminSideRoomTypeSerializer(serializers.ModelSerializer):
      # nested serializer for handling current and alloted hostels in admin side student view

      hostel = serializers.SerializerMethodField()
      
      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel']
            extra_kwargs = {
                  'name': {'read_only': True},
                  'id': {'read_only': False}
            }
      
      def get_hostel(self, obj):
            return obj.hostel.name


class StudentAdminSideProfileSerializer(serializers.ModelSerializer):
      # Serializer to represent student profile data on admin side

      batch = StudentAdminSideBatchSerializer()
      current_room = StudentAdminSideRoomTypeSerializer(allow_null=True)
      alloted_room = StudentAdminSideRoomTypeSerializer(allow_null=True)
      user = StudentAdminSideUserSerializer()

      class Meta:
            model = Student
            fields = ['rollno', 'name', 'phoneno', 'gender', 'cg', 'batch', 'current_room', 'alloted_room', 'user']

      @transaction.atomic
      def create(self, validated_data):
            user_data = validated_data.pop('user')
            user = User(email=user_data.get('email'))
            password = ''.join(choice(string.ascii_letters + string.digits) for _ in range(8))
            user.set_password(password)
            user.save()

            batch_data = validated_data.pop('batch')
            batch = Batch.objects.filter(id=batch_data.get('id')).first()
            
            if batch is None:
                  raise serializers.ValidationError({'batch': {'id': 'No Batch Found!'}})

            current_room_data = validated_data.pop('current_room')
            if current_room_data is not None:
                  current_room = RoomType.objects.filter(id=current_room_data.get('id')).first()
                  if current_room is None:
                        raise serializers.ValidationError({'current_room': {'id': 'No Room Type Found!'}})
            else:
                  current_room = None
            
            alloted_room_data = validated_data.pop('alloted_room')
            if alloted_room_data is not None:
                  alloted_room = RoomType.objects.filter(id=alloted_room_data.get('id')).first()
                  if alloted_room is None:
                        raise serializers.ValidationError({'alloted_room': {'id': 'No Room Type Found!'}})
            else:
                  alloted_room = None
            

            instance = Student.objects.create(user=user, batch=batch, current_room=current_room, alloted_room=alloted_room, **validated_data)

            return instance

      @transaction.atomic
      def update(self, instance, validated_data):
            if validated_data.get('user') is not None:
                  user_data = validated_data.pop('user')
                  if user_data.get('email') is not None:
                        user = instance.user
                        user.email = user_data.get('email')
                        user.save()
            
            current_room = None
            if validated_data.get('current_room') is not None:
                  current_room_data = validated_data.pop('current_room')
                  if current_room_data.get('id') is not None:
                        current_room = RoomType.objects.filter(id=current_room_data.get('id')).first()
                        if current_room is None:
                              raise serializers.ValidationError({'current_room': {'id': 'No Room Type found!'}})
                  
            alloted_room = None
            if validated_data.get('alloted_room') is not None:
                  alloted_room_data = validated_data.pop('alloted_room')
                  if alloted_room_data.get('id') is not None:
                        alloted_room = RoomType.objects.filter(id=alloted_room_data.get('id')).first()
                        if alloted_room is None:
                              raise serializers.ValidationError({'alloted_room': {'id': 'No Room Type found!'}})
            
            batch = None
            if validated_data.get('batch') is not None:
                  batch_data = validated_data.pop('batch')
                  if batch_data.get('id') is not None:
                        batch = Batch.objects.filter(id=batch_data.get('id')).first()
                        if batch is None:
                              raise serializers.ValidationError({'batch': {'id': 'No Batch found!'}})
            

            instance.name = validated_data.get('name', instance.name)
            instance.rollno = validated_data.get('rollno', instance.rollno)
            instance.phoneno = validated_data.get('phoneno', instance.phoneno)
            instance.gender = validated_data.get('gender', instance.gender)
            instance.cg = validated_data.get('cg', instance.cg)
            
            if current_room is not None:
                  instance.current_room = current_room
            if alloted_room is not None:
                  instance.alloted_room = alloted_room
            
            if batch is not None:
                  instance.batch = batch
            
            instance.save()
            return instance
