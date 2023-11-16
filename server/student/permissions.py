from rest_framework.permissions import BasePermission
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from .models import Section


class IsStudent(BasePermission):
      def has_permission(self, request, view):
            print('is student')
            return request.user.is_student


class IsGroupLeader(BasePermission):
      def has_permission(self, request, view):
            try:
                  _ = request.user.student.leader_of_group
                  return True
            except ObjectDoesNotExist:
                  return False


class IsGroupMember(BasePermission):
      def has_permission(self, request, view):
            return request.user.student.group is not None


class IsPreferenceFillingLive(BasePermission):
      def has_permission(self, request, view):
            student = request.user.student
            batch = student.batch
            gender = student.gender
            section = Section.objects.filter(batch=batch, gender=gender).first()
            return section is not None and section.is_allotment_enabled


class IsRetainAllowed(BasePermission):
      def has_permission(self, request, view):
            section = Section.objects.filter(batch=request.user.student.batch, gender = request.user.student.gender).first()
            return section.is_retain_allowed