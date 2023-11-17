from rest_framework.permissions import BasePermission
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from .models import Section


class IsStudent(BasePermission):
      message = 'Only Student is authorized to perform this action'

      def has_permission(self, request, view):
            return request.user.is_student


class IsGroupLeader(BasePermission):
      message = 'Only a Group Leader is authorized to perform this action'

      def has_permission(self, request, view):
            try:
                  _ = request.user.student.leader_of_group
                  return True
            except ObjectDoesNotExist:
                  return False


class IsNotGroupLeader(BasePermission):
      message = 'Group Leader is not authorized to perform this action'

      def has_permission(self, request, view):
            try:
                  _ = request.user.student.leader_of_group
                  return False
            except ObjectDoesNotExist:
                  return True


class IsGroupMember(BasePermission):
      message = 'Only a Group Member is authorized to perform this action'

      def has_permission(self, request, view):
            return request.user.student.group is not None


class IsNotGroupMember(BasePermission):
      message = 'Group Member is not authorized to perform this action'

      def has_permission(self, request, view):
            return request.user.student.group is None


class IsPreferenceFillingLive(BasePermission):
      message = 'Hostel Preference Filling Process is not live'

      def has_permission(self, request, view):
            student = request.user.student
            batch = student.batch
            gender = student.gender
            section = Section.objects.filter(batch=batch, gender=gender).first()
            return section is not None and section.is_allotment_enabled


class IsRetainAllowed(BasePermission):
      message = 'Retain is not allowed'

      def has_permission(self, request, view):
            section = Section.objects.filter(batch=request.user.student.batch, gender = request.user.student.gender).first()
            return section.is_retain_allowed