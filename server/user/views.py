from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import User, ResetSlug

from random import choice
import string
from .tasks import send_password_reset_mail

# Create your views here.


class ChangePasswordView(APIView):
      permission_classes = [IsAuthenticated]

      def post(self, request):
            password = request.data.get('password')
            if password is None:
                  return Response(status=status.HTTP_400_BAD_REQUEST)
            user = request.user
            user.set_password(password)
            user.save()
            return Response(status=status.HTTP_200_OK)


class EmailResetPasswordView(APIView):
      def post(self, request):
            user = User.objects.filter(email=request.data.get('email')).first()
            if user is None:
                  return Response(status=status.HTTP_404_NOT_FOUND)
            
            slug_instance = ResetSlug.objects.filter(user=user).first()
            if slug_instance is None:
                  while True:
                        slug = ''.join(choice(string.ascii_letters + string.digits + '-') for _ in range(135))
                        if not ResetSlug.objects.filter(slug=slug).exists():
                              break
                  slug_instance = ResetSlug(user=user, slug=slug)
                  slug_instance.save()

            try:
                  name = user.student.name
            except:
                  name = "Admin"
            #TODO: add url
            url = "https://hosmas.ccstiet.com/reset-password/"+slug_instance.slug
            send_password_reset_mail.delay(name, url, user.email)

            return Response(status=status.HTTP_200_OK)


class ResetPasswordView(APIView):
      def post(self, request):
            slug_instance = ResetSlug.objects.filter(slug=request.data.get('slug')).first()
            password = request.data.get('password')

            if slug_instance is None or password is None:
                  return Response(status=status.HTTP_400_BAD_REQUEST)
            
            user = slug_instance.user
            user.set_password(password)
            user.save()

            slug_instance.delete()

            return Response(status=status.HTTP_200_OK)
