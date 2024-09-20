from random import choice
import string

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.response import Response

from . import services as user_services
from .models import User
from .tasks import send_password_reset_mail

import common.services as common_services


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(
            user_services.get_user_detailed_profile(request.user.id), status=HTTP_200_OK
        )


class getStudentProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        return Response(
            user_services.get_user_detailed_profile(slug), status=HTTP_200_OK
        )


class EmailResetPasswordView(APIView):
    def post(self, request):
        user = common_services.filter_objects(
            User.objects, email=request.data.get("email")
        ).first()
        if user is None:
            return Response(status=HTTP_400_BAD_REQUEST)

        if user.password_reset_slug is None or user.password_reset_slug == "":
            while True:
                slug = "".join(
                    choice(string.ascii_letters + string.digits + "-")
                    for _ in range(135)
                )
                if not User.objects.filter(password_reset_slug=slug).exists():
                    break
            user.password_reset_slug = slug
            user.save()

        print(user.password_reset_slug)

        try:
            name = user.student.name
        except:
            try:
                name = user.supervisor.name
            except:
                name = "Admin"

        url = (
            "https://allotment.onlinehostel.in/auth/forgot-password/"
            + user.password_reset_slug
        )
        send_password_reset_mail.delay(name, url, user.email)

        return Response(status=HTTP_200_OK)


class ResetPasswordView(APIView):
    def post(self, request):
        user = common_services.filter_objects(
            User.objects, password_reset_slug=request.data.get("slug")
        ).first()
        password = request.data.get("password")

        if user is None or password is None:
            return Response(status=HTTP_400_BAD_REQUEST)

        user.set_password(password)
        user.password_reset_slug = None
        user.save()

        return Response(status=HTTP_200_OK)
