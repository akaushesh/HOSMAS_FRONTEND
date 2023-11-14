from django.core.files.storage import default_storage

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .permissions import IsAdmin
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch

from .serializers import HostelSerializer, RoomTypeSerializer, RoomTypeChoiceSerializer, BatchSerializer
from datetime import datetime

# Create your views here.


class CreateItemView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def post(self, request, model):
            if model=='hostel':
                  serializer = HostelSerializer(data=request.data)
            elif model=='roomtype':
                  serializer = RoomTypeSerializer(data=request.data)
            elif model=='choice':
                  serializer = RoomTypeChoiceSerializer(data=request.data)
            elif model=='batch':
                  serializer = BatchSerializer(data=request.data)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)
            
            if not serializer.is_valid():
                  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()

            return Response(status=status.HTTP_201_CREATED)


class ReadAllItemsView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def get(self, request, model):
            if model=='hostel':
                  queryset = Hostel.objects.all()
                  serializer = HostelSerializer(queryset, many=True)
            elif model=='roomtype':
                  queryset = RoomType.objects.all()
                  serializer = RoomTypeSerializer(queryset, many=True)
            elif model=='choice':
                  queryset = RoomTypeChoice.objects.all()
                  serializer = RoomTypeChoiceSerializer(queryset, many=True)
            elif model=='batch':
                  queryset = Batch.objects.all()
                  serializer = BatchSerializer(queryset, many=True)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            return Response(serializer.data, status=status.HTTP_200_OK)


class ReadItemView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]
      
      def get(self, request, model, id):
            if model=='hostel':
                  instance = Hostel.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = HostelSerializer(instance)
            elif model=='roomtype':
                  instance = RoomType.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = RoomTypeSerializer(instance)
            elif model=='choice':
                  instance = RoomTypeChoice.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = RoomTypeChoiceSerializer(instance)
            elif model=='batch':
                  instance = Batch.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = BatchSerializer(instance)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            return Response(serializer.data, status=status.HTTP_200_OK)


class UpdateItemView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def put(self, request, model, id):
            if model=='hostel':
                  instance = Hostel.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = HostelSerializer(instance, request.data)
            elif model=='roomtype':
                  instance = RoomType.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = RoomTypeSerializer(instance, request.data)
            elif model=='choice':
                  instance = RoomTypeChoice.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = RoomTypeChoiceSerializer(instance, request.data)
            elif model=='batch':
                  instance = Batch.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = BatchSerializer(instance, request.data)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            if not serializer.is_valid():
                  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()

            return Response(status=status.HTTP_200_OK)


class DeleteItemView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def delete(self, request, model):
            id = request.data.get('id')
            if id is None:
                  return Response(status=status.HTTP_400_BAD_REQUEST)

            if model=='hostel':
                  instance = Hostel.objects.filter(id=id).first()
            elif model=='roomtype':
                  instance = RoomType.objects.filter(id=id).first()
            elif model=='choice':
                  instance = RoomTypeChoice.objects.filter(id=id).first()
            elif model=='batch':
                  instance = Batch.objects.filter(id=id).first()
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            if instance is None:
                  return Response(status=status.HTTP_400_BAD_REQUEST)

            instance.delete()
            return Response(status=status.HTTP_200_OK)


class ImportStudentsView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def post(self, request):
            batch = request.data.get('batch')
            file = request.data.get('file')

            if batch is None or file is None or file.name.split('.')[-1]!='csv':
                  return Response(status=status.HTTP_400_BAD_REQUEST)

            filename = f"{datetime.now().strftime('%Y%m%d_%H%M')}_{file.name}"
            filename = default_storage.save(filename, file)

            batch = batch.strip()
            batch_instance = Batch.objects.filter(name=batch).first()
            if batch_instance is None:
                  batch_instance = Batch(name=batch)
                  batch_instance.save()

            #TODO: Add students to database

            return Response(status=status.HTTP_202_ACCEPTED)
