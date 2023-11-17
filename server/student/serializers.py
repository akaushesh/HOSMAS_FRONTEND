from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from rest_framework import serializers
from .models import Invitation, Student, Group
from dashboard.models import AllotmentStatus


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
            fields = ['leader', 'members', 'cg', 'role']
      
      def get_role(self, obj):
            return 'leader' if self.context.get('student')==obj.leader else 'member'


class StudentProfileSerializer(ModelSerializer):
      batch = SlugRelatedField(
            read_only = True,
            slug_field = 'name'
      )
      current_room = SlugRelatedField(
            read_only = True,
            slug_field = 'name'
      )
      email = SerializerMethodField()
      current_hostel = SerializerMethodField()
      alloted_hostel = SerializerMethodField()
      alloted_room = SerializerMethodField()
      gender = SerializerMethodField()
      group = SerializerMethodField()
      preference_filled = SerializerMethodField()

      class Meta:
            model = Student
            fields = ['name', 'rollno', 'email', 'cg', 'gender', 'batch', 'current_hostel', 'current_room', 'alloted_hostel', 'alloted_room', 'group', 'preference_filled']

      def get_email(self, obj):
            return obj.user.email

      def get_current_hostel(self, obj):
            if obj.current_room is None:
                  return None
            return obj.current_room.hostel.name

      def get_alloted_hostel(self, obj):
            allotment_status = AllotmentStatus.objects.first()
            if allotment_status is None or not allotment_status.is_public or obj.alloted_room is None:
                  return None
            return obj.alloted_room.hostel.name

      def get_alloted_room(self, obj):
            allotment_status = AllotmentStatus.objects.first()
            if allotment_status is None or not allotment_status.is_public or obj.alloted_room is None:
                  return None
            return obj.alloted_room.name

      def get_gender(self, obj):
            return 'Female' if obj.gender=='F' else 'Male'

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
      
      def get_preference_filled(self, obj):
            try:
                  group = obj.leader_of_group
            except:
                  group = obj.group
                  if group is None:
                        return False
            return group.preferences.count() > 0
