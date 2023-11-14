from django.core.files.storage import default_storage

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .permissions import IsAdmin
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch, Student, Group

from .serializers import HostelSerializer, HostelSingleSerializer, RoomTypeSerializer, RoomTypeChoiceSerializer, BatchSerializer
from datetime import datetime
from django.core.paginator import Paginator
from student.serializers import StudentSerializer, GroupSerializer
# Create your views here.


class CreateObjectView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def post(self, request, model):
            if model=='hostel':
                  serializer = HostelSerializer(data=request.data)
            elif model=='roomtype':
                  serializer = RoomTypeSerializer(data=request.data)
            elif model=='choice':
                  serializer = RoomTypeChoiceSerializer(data=request.data)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)
            
            if not serializer.is_valid():
                  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()

            return Response(status=status.HTTP_201_CREATED)


class AllHostelsView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def get(self, request):
            queryset = Hostel.objects.all()
            serializer = HostelSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


class GetObjectView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]
      
      def get(self, request, model, id):
            if model=='hostel':
                  instance = Hostel.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = HostelSingleSerializer(instance)
            elif model=='roomtype':
                  instance = RoomType.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = RoomTypeSerializer(instance)
            else:
                  return Response(status.HTTP_404_NOT_FOUND)
            return Response(serializer.data, status=status.HTTP_200_OK)


class UpdateObjectView(APIView):
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
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            if not serializer.is_valid():
                  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()

            return Response(status=status.HTTP_200_OK)


class DeleteObjectView(APIView):
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


class getStudents(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]
      
      def get(self, request):
            roll = request.data.get('roll_no')
            students_per_page = 3
            if roll is not None:
                  students_list = Student.objects.filter(rollno__startswith = roll)
            else:
                  students_list = Student.objects.all()
            p = Paginator(students_list, students_per_page)
            
            page_number = request.data.get('page')
            if page_number is None:
                  page_number = 1
            page_number = int(page_number)
            total_pages = p.num_pages
            if (page_number>total_pages or page_number<1):
                  return Response({'error':'Page does not exist'}, status=status.HTTP_400_BAD_REQUEST)
            
            students = p.page(page_number)
            serializer = StudentSerializer(students, many=True)
            
            return Response({'status':'success', 'data':serializer.data, 'total_pages':total_pages}, status=status.HTTP_200_OK)


class getGroups(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]
      
      def get(self, request):
            # roll = request.data.get('roll_no')
            groups_per_page = 3
            
            groups_list = Group.objects.all()
            p = Paginator(groups_list, groups_per_page)
            
            page_number = request.data.get('page')
            if page_number is None:
                  page_number = 1
            page_number = int(page_number)
            total_pages = p.num_pages
            if (page_number>total_pages or page_number<1):
                  return Response({'error':'Page does not exist'}, status=status.HTTP_400_BAD_REQUEST)
            
            groups = p.page(page_number)
            serializer = GroupSerializer(groups, many=True)
            
            return Response({'status':'success', 'data':serializer.data, 'total_pages':total_pages}, status=status.HTTP_200_OK)