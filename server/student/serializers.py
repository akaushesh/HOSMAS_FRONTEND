from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
from django.core.cache import cache
from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from rest_framework import serializers
from .models import Invitation, Student, Group, Batch, Section
from dashboard.models import AllotmentStatus, AcademicSession
from preference.models import RoomType
from user.models import User
from .tasks import send_teamleader_change_mail, left_group_mail
from random import choice
import string


class InvitationsReceivedSerializer(ModelSerializer):
      group_leader_name = SerializerMethodField()
      group_leader_rollno = SerializerMethodField()

      class Meta:
            model = Invitation
            fields = ('id', 'group_leader_name', 'group_leader_rollno', 'time')

      def get_group_leader_name(self, obj):
            return obj.for_group.leader.name

      def get_group_leader_rollno(self, obj):
            return obj.for_group.leader.rollno


class InvitationsSentSerializer(ModelSerializer):
      invitee_name = SerializerMethodField()
      invitee_rollno = SerializerMethodField()

      class Meta:
            model = Invitation
            fields = ('id', 'invitee_name', 'invitee_rollno', 'time')

      def get_invitee_name(self, obj):
            return obj.to.name

      def get_invitee_rollno(self, obj):
            return obj.to.rollno


class StudentSerializer(ModelSerializer):
      class Meta:
            model = Student
            fields = ['name', 'rollno']


class GroupStudentSerializer(ModelSerializer):
      class Meta:
            model = Student
            fields = ['name', 'rollno', 'cg']


class GroupSerializer(ModelSerializer):
      leader = GroupStudentSerializer(read_only=True)
      members = GroupStudentSerializer(read_only=True, many=True)
      role = SerializerMethodField()

      class Meta:
            model = Group
            fields = ['id', 'leader', 'members', 'cg', 'role']
      
      def get_role(self, obj):
            return 'leader' if self.context.get('student')==obj.leader else 'member'


class UserSerializer(serializers.ModelSerializer):
      # nested serializer for handling user email in admin side student view

      class Meta:
            model = User
            fields = ['email']


class StudentProfileBatchSerializer(serializers.ModelSerializer):
      # nested serializer for handling student batch in admin side student view

      class Meta:
            model = Batch
            fields = ['id', 'name']
            extra_kwargs = {
                  'name': {'read_only': True},
                  'id': {'read_only': False}
            }


class StudentProfileRoomTypeSerializer(serializers.ModelSerializer):
      # nested serializer for handling current and alloted hostels in admin side student view

      hostel = serializers.SerializerMethodField()
      hostel_id = serializers.SerializerMethodField()
      room_type = serializers.SerializerMethodField()
      room_type_id = serializers.SerializerMethodField()
      
      class Meta:
            model = RoomType
            fields = ['id', 'room_type_id', 'room_type', 'hostel_id', 'hostel', 'fee']
            extra_kwargs = {
                  'id': {'read_only': False, 'write_only': True}
            }
      
      def get_hostel(self, obj):
            return obj.hostel.name
      
      def get_hostel_id(self, obj):
            return obj.hostel.id
      
      def get_room_type(self, obj):
            return obj.name
      
      def get_room_type_id(self, obj):
            return obj.id


class StudentProfileSerializer(serializers.ModelSerializer):
      # Serializer to represent student profile data on admin side

      batch = StudentProfileBatchSerializer()
      user = UserSerializer()
      current_hostel = StudentProfileRoomTypeSerializer(read_only=True, source='current_room')
      preview_hostel = serializers.SerializerMethodField()
      alloted_hostel = serializers.SerializerMethodField()
      
      group = SerializerMethodField()
      is_preference_filled = SerializerMethodField()
      academic_session = SerializerMethodField()
      fee_structure_url = SerializerMethodField()
      group_size_limit = SerializerMethodField()

      class Meta:
            model = Student
            fields = ['rollno', 'name', 'phoneno', 'gender', 'cg', 'batch', 'current_room', 'alloted_room', 'user', 'group', 'is_preference_filled', 'academic_session', 'fee_structure_url', 'current_hostel', 'preview_hostel', 'alloted_hostel', 'group_size_limit']
            extra_kwargs = {
                  'alloted_room': {'write_only': True},
                  'current_room': {'write_only': True},
            }

      def get_group(self, obj):
            try:
                  group = obj.leader_of_group
                  res = {
                        'leader_name': obj.name,
                        'leader_email': obj.user.email,
                        'size': group.members.count() + 1
                  }
            except ObjectDoesNotExist:
                  group = obj.group
                  if group is None:
                        return None
                  res = {
                        'leader_name': group.leader.name,
                        'leader_email': group.leader.user.email,
                        'size': group.members.count() + 1
                  }
            if self.context.get('is_admin', False):
                  res['id'] = group.id
            return res
      
      def get_is_preference_filled(self, obj):
            try:
                  group = obj.leader_of_group
            except ObjectDoesNotExist:
                  group = obj.group
                  if group is None:
                        return False
            return group.preferences.count() > 0
      
      def get_academic_session(self, obj):
            if self.context.get('is_admin', False):
                  return None
            cachedObj = cache.get('academicSession')
            if cachedObj is not None:
                  return cachedObj
            instance = AcademicSession.objects.first()
            if instance is None:
                  instance = AcademicSession(name='')
                  instance.save()
            cache.set('academicSession', instance.name)
            return instance.name

      def get_fee_structure_url(self, obj):
            if self.context.get('is_admin', False):
                  return None
            cachedObj = cache.get('feeStructureUrl')
            if cachedObj is not None:
                  return cachedObj
            instance = AcademicSession.objects.first()
            if instance is None:
                  instance = AcademicSession(name='')
                  instance.save()
            cache.set('feeStructureUrl', instance.fee_structure_url)
            return instance.fee_structure_url
      
      def get_preview_hostel(self, obj):
            if obj.preview_room is None or not self.context.get('is_admin', False):
                  return None
            serializer = StudentProfileRoomTypeSerializer(obj.preview_room)
            return serializer.data
      
      def get_alloted_hostel(self, obj):
            if obj.alloted_room is None or not self.context.get('is_admin', False) and not Section.objects.filter(batch=obj.batch, gender=obj.gender, is_allotment_result_public=True).exists():
                        return None
            serializer = StudentProfileRoomTypeSerializer(obj.alloted_room)
            return serializer.data
      
      def get_group_size_limit(self, obj):
            if self.context.get('is_admin', False):
                  return None
            section = Section.objects.filter(batch=obj.batch, gender=obj.gender).first()
            if section is None:
                  return 1
            return section.group_size_limit
      
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

            instance = Student.objects.create(user=user, batch=batch, **validated_data)

            return instance

      @transaction.atomic
      def update(self, instance, validated_data):
            if validated_data.get('user') is not None:
                  user_data = validated_data.pop('user')
                  if user_data.get('email') is not None:
                        user = instance.user
                        user.email = user_data.get('email')
                        user.save()
            
            # current_room = None
            # if validated_data.get('current_room') is not None:
            #       current_room_data = validated_data.pop('current_room')
            #       if current_room_data.get('id') is not None:
            #             current_room = RoomType.objects.filter(id=current_room_data.get('id')).first()
            #             if current_room is None:
            #                   raise serializers.ValidationError({'current_room': {'id': 'No Room Type found!'}})
                  
            # alloted_room = None
            # if validated_data.get('alloted_room') is not None:
            #       alloted_room_data = validated_data.pop('alloted_room')
            #       if alloted_room_data.get('id') is not None:
            #             alloted_room = RoomType.objects.filter(id=alloted_room_data.get('id')).first()
            #             if alloted_room is None:
            #                   raise serializers.ValidationError({'alloted_room': {'id': 'No Room Type found!'}})
            
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
            instance.current_room = validated_data.get('current_room', instance.current_room)

            updated_alloted_room = validated_data.get('alloted_room', instance.alloted_room)

            if updated_alloted_room is not None and instance.alloted_room != updated_alloted_room:
                  if instance.preview_room is not None:
                        instance.preview_room = None
                  try:
                        gp = instance.leader_of_group
                        if gp.members.count() > 0:
                              newleader = gp.members.first()
                              gp.leader = newleader

                              ms = gp.members.all()

                              updatedcg = gp.leader.cg  - instance.cg
                              cnt = 0
                              for member in ms:
                                    updatedcg += member.cg
                                    cnt += 1
                              updatedcg /= cnt
                              gp.cg = round(updatedcg, 2)
                              gp.save()

                              newleader.group = None
                              newleader.save()

                              for member in ms:
                                    send_teamleader_change_mail.delay(gp.leader.name, gp.leader.rollno, member.user.email, member.name)
                              send_teamleader_change_mail.delay(gp.leader.name, gp.leader.rollno, gp.leader.user.email, gp.leader.name)

                              Group.objects.create(leader=instance, cg=instance.cg)
                  
                  except ObjectDoesNotExist:
                        if instance.group is not None:
                              gp = instance.group

                              left_group_mail.delay(gp.leader.name, instance.name, instance.rollno, gp.leader.user.email)
                              ms = gp.members.all()
                              for m in ms:
                                    if m != instance:
                                          left_group_mail.delay(m.name, instance.name, instance.rollno, m.user.email)
                              
                              # due to prefetch, members were fetched before execution of above statement, so adjust cg of removed student
                              updatedcg = gp.leader.cg  - instance.cg
                              cnt = 0
                              for member in ms:
                                    updatedcg += member.cg
                                    cnt += 1
                              updatedcg /= cnt
                              gp.cg = round(updatedcg, 2)
                              gp.save()

                              instance.group = None
                              instance.save()

                              Group.objects.create(leader=instance, cg=instance.cg)

            instance.alloted_room = updated_alloted_room
            
            # if current_room is not None:
            #       instance.current_room = current_room
            # if alloted_room is not None:
            #       instance.alloted_room = alloted_room
            
            if batch is not None:
                  instance.batch = batch
            
            instance.save()
            return instance
