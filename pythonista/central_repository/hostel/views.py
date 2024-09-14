from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

import common.services as common_services

from .models import Hostel
from .serializers import HostelSerializer


class HostelAllView(APIView):
    def get(self, request):
        qs = common_services.all_objects(
            Hostel.objects, prefetch_related=("blocks__levels",)
        )
        serializer = HostelSerializer(qs, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


class HostelSingleView(APIView):
    def get(self, request, hostel_id):
        try:
            qs = common_services.get_object(Hostel.objects, id=hostel_id)
        except ObjectDoesNotExist:
            return Response(
                {"detail": f"No hostel found with id {hostel_id}"},
                status=HTTP_400_BAD_REQUEST,
            )

        serializer = HostelSerializer(qs)
        return Response(serializer.data, status=HTTP_200_OK)
