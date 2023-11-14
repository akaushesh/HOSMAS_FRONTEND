from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from rest_framework import serializers
from .models import Invitation, Student, Group


class InvitationsReceivedSerializer(ModelSerializer):
      group_leader_name = SerializerMethodField()
      group_leader_rollno = SerializerMethodField()

      class Meta:
            model = Invitation
            fields = ('id', 'group_leader_name', 'group_leader_rollno')

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
      gender = SerializerMethodField()
      role = SerializerMethodField()

      class Meta:
            model = Student
            fields = ['name', 'rollno', 'cg', 'gender', 'batch', 'role']
      
      def get_gender(self, obj):
            return 'Female' if obj.gender=='F' else 'Male'
      
      def get_role(self, obj):
            try:
                  _ = obj.leader_of_group
                  return 'leader'
            except:
                  return 'member' if obj.group is not None else 'unregistered'
