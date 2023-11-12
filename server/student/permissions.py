from rest_framework.permissions import BasePermission
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist


class IsStudent(BasePermission):
      def has_permission(self, request, view):
            return request.user.is_student


class IsGroupLeader(BasePermission):
      code = status.HTTP_412_PRECONDITION_FAILED

      def has_permission(self, request, view):
            try:
                  _ = request.user.leader_of_group
                  return True
            except ObjectDoesNotExist:
                  return False


class IsGroupMember(BasePermission):
      code = status.HTTP_412_PRECONDITION_FAILED

      def has_permission(self, request, view):
            return request.user.group is not None
