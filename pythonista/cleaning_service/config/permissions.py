import requests

from django.conf import settings

from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import BasePermission


class IsAuthenticated(BasePermission):
    def has_permission(self, request, view):
        jwt_token = request.META.get("HTTP_AUTHORIZATION")
        if jwt_token is None:
            raise AuthenticationFailed("Missing Token")

        r = requests.get(
            f"{settings.CENTRAL_REPOSITORY_URL}/user/", headers={"Authorization": jwt_token}
        )
        if r.status_code == 200:
            request.user = r.json()
            return True
        elif r.status_code == 401:
            raise AuthenticationFailed("Invalid Token")
        return False


# Please use this only when IsAuthenticated is already used and hence request.user is populated from central repo
class IsSupervisor(BasePermission):
    def has_permission(self, request, view):
        return request.user is not None and request.user.get('role')=='supervisor'


# Please use this only when IsAuthenticated is already used and hence request.user is populated from central repo
class IsStudent(BasePermission):
    def has_permission(self, request, view):
        return request.user is not None and request.user.get('role')=='student'
