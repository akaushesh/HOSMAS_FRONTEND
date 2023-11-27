from django.db import transaction
from django.core.cache import cache
from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from rest_framework import serializers
from .models import Invitation, Student, Group, Batch
from dashboard.models import AllotmentStatus, AcademicSession
from preference.models import RoomType
from user.models import User


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
      
      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel']
            extra_kwargs = {
                  'name': {'read_only': True},
                  'id': {'read_only': False}
            }
      
      def get_hostel(self, obj):
            return obj.hostel.name


class StudentProfileSerializer(serializers.ModelSerializer):
      # Serializer to represent student profile data on admin side

      batch = StudentProfileBatchSerializer()
      current_room = StudentProfileRoomTypeSerializer(allow_null=True)
      alloted_room = StudentProfileRoomTypeSerializer(allow_null=True)
      user = UserSerializer()
      
      group = SerializerMethodField()
      is_preference_filled = SerializerMethodField()
      academic_session = SerializerMethodField()

      class Meta:
            model = Student
            fields = ['rollno', 'name', 'phoneno', 'gender', 'cg', 'batch', 'current_room', 'alloted_room', 'user', 'group', 'is_preference_filled', 'academic_session']

      def get_group(self, obj):
            try:
                  group = obj.leader_of_group
                  return {
                        'leader_name': obj.name,
                        'leader_email': obj.user.email,
                        'size': group.members.count() + 1
                  }
            except:
                  group = obj.group
                  if group is None:
                        return None
                  return {
                        'leader_name': group.leader.name,
                        'leader_email': group.leader.user.email,
                        'size': group.members.count() + 1
                  }
      
      def get_is_preference_filled(self, obj):
            try:
                  group = obj.leader_of_group
            except:
                  group = obj.group
                  if group is None:
                        return False
            return group.preferences.count() > 0
      
      def get_academic_session(self, obj):
            cachedObj = cache.get('academicSession')
            if cachedObj is not None:
                  return cachedObj
            instance = AcademicSession.objects.first()
            if instance is None:
                  instance = AcademicSession(name='')
                  instance.save()
            cache.set('academicSession', instance.name)
            return instance.name
      
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
