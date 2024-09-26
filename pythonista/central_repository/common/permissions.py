from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import BasePermission


# Please use this only when IsAuthenticated is already used and hence request.user is populated
class IsSupervisor(BasePermission):
    def has_permission(self, request, view):
        try:
            request.user.supervisor
            return True
        except ObjectDoesNotExist:
            return False
