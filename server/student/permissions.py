from rest_framework.permissions import BasePermission
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist


class IsStudent(BasePermission):
      def has_permission(self, request, view):
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
            return request.user.student.batch.is_preference_filling_live
