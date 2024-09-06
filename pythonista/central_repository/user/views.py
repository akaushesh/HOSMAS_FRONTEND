from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response

from . import services as user_services


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
