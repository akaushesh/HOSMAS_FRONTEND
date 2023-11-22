from django.core.files.storage import default_storage
from django.core.paginator import Paginator
from django.db.models import Count, Q
from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .permissions import IsAdmin

from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch, Section, Student, Group
from .models import AllotmentStatus, AcademicSession, Faq

from .serializers import HostelSerializer, HostelSingleSerializer, RoomTypeSerializer, RoomTypeChoiceSerializer, RoomTypeOptionSerializer, BatchSerializer, BatchUninitializedSerializer, SectionSerializer, ProfileSerializer, AllotmentStatusSerializer, SectionRoomTypeSerializer, AcademicSessionSerializer, FAQSerializer
from .serializers import *
from student.serializers import StudentSerializer, GroupSerializer

from .tasks import allot_hostel, add_users

from datetime import datetime
import csv, os
# Create your views here.


class CreateObjectView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def post(self, request, model):
            if model=='hostel':
                  serializer = HostelSingleSerializer(data=request.data)
            elif model=='roomtype':
                  serializer = RoomTypeSerializer(data=request.data)
            elif model=='choice':
                  serializer = RoomTypeChoiceSerializer(data=request.data)
            elif model=='batch':
                  serializer = BatchSerializer(data = request.data)
            elif model=='section':
                  serializer = SectionSerializer(data = request.data)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)
            
            if not serializer.is_valid():
                  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetMultipleObjectsView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def get(self, request, model):
            if model=='hostel':
                  queryset = Hostel.objects.all()
                  serializer = HostelSerializer(queryset, many=True)
            elif model=='section':
                  queryset = Section.objects.all()
                  serializer = SectionSerializer(queryset, many=True)
            elif model=='uninitialized-batch':
                  queryset = Batch.objects.annotate(
                        sections_count = Count('sections')
                  ).filter(sections_count__lt=2)
                  serializer = BatchUninitializedSerializer(queryset, many=True)
            elif model=='roomtype':
                  queryset = RoomType.objects.all()
                  serializer = RoomTypeOptionSerializer(queryset, many=True)
            elif model=='choice':
                  queryset = Section.objects.filter(id=request.GET.get('section')).first()
                  if queryset is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = SectionRoomTypeSerializer(queryset)
            elif model=='batch':
                  queryset = Batch.objects.all()
                  serializer = BatchSerializer(queryset, many=True)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)
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
            elif model=='allotment-status':
                  instance = AllotmentStatus.objects.first()
                  if instance is None:
                        instance = AllotmentStatus()
                        instance.save()
                  serializer = AllotmentStatusSerializer(instance)
            elif model=='academic-session':
                  instance = AcademicSession.objects.first()
                  if instance is None:
                        instance = AcademicSession(name='')
                        instance.save()
                  serializer = AcademicSessionSerializer(instance)
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
                  serializer = HostelSingleSerializer(instance, request.data)
            elif model=='roomtype':
                  instance = RoomType.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = RoomTypeSerializer(instance, request.data)
            elif model=='choice':
                  instance = RoomTypeChoice.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = RoomTypeChoiceSerializer(instance, request.data, partial=True)
            elif model=='section':
                  instance = Section.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = SectionSerializer(instance, request.data)
            elif model=='batch':
                  instance = Batch.objects.filter(id=id).first()
                  if instance is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  serializer = BatchSerializer(instance, request.data)
            elif model=='allotment-status':
                  instance = AllotmentStatus.objects.first()
                  if instance is None:
                        instance = AllotmentStatus()
                        instance.save()
                  serializer = AllotmentStatusSerializer(instance, request.data)
            elif model=='academic-session':
                  instance = AcademicSession.objects.first()
                  if instance is None:
                        instance = AcademicSession(name='')
                        instance.save()
                  serializer = AcademicSessionSerializer(instance, request.data)
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            if not serializer.is_valid():
                  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)


class DeleteObjectView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def delete(self, request, model):
            id = request.data.get('id')
            if id is None:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            if model=='hostel':
                  instance = Hostel.objects.filter(id=id).first()
            elif model=='roomtype':
                  instance = RoomType.objects.filter(id=id).first()
            elif model=='choice':
                  instance = RoomTypeChoice.objects.filter(id=id).first()
            elif model=='section':
                  instance = Section.objects.filter(id=id).first()
            elif model=='batch':
                  instance = Batch.objects.filter(id=id).first()
            elif model=='section':
                  instance = Section.objects.filter(id=id).first()
            else:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            if instance is None:
                  return Response(status=status.HTTP_404_NOT_FOUND)

            instance.delete()
            return Response(status=status.HTTP_200_OK)


class ImportStudentsView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def post(self, request):
            file = request.data.get('file')
            
            filename = f"{datetime.now().strftime('%Y%m%d_%H%M')}_{file.name}"

            if filename.split('.')[-1]!='csv':
                  return Response({'error':'file not csv'}, status=status.HTTP_400_BAD_REQUEST)
            
            storage = default_storage
            storage.location = os.path.join(settings.BASE_DIR, 'imported-data')
            filename = storage.save(filename, file)
            
            add_users.delay(filename)

            #TODO: Add students to database -> done

            return Response(status=status.HTTP_202_ACCEPTED)


class getStudents(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]
      
      def get(self, request):
            roll = request.data.get('roll_no')
            batch_name = request.data.get('batch')
            batch = Batch.objects.filter(name = batch_name).first()
            
            if (batch is None):
                  return Response({'error':'Batch does not exist'}, status=status.HTTP_404_NOT_FOUND)
            
            
            
            students_per_page = 20
            if roll is not None:
                  students_list = Student.objects.filter(Q(rollno__startswith = roll) & Q(batch = batch))
            else:
                  students_list = Student.objects.filter(batch = batch)
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
            groups_per_page = 10
            
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
      
class getGroup(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]
      
      def get(self, request):
            id = request.data.get('id')
            group = Group.objects.filter(id=id).first()
            if group is None:
                  return Response({'error':'Group does not exist'}, status=status.HTTP_404_NOT_FOUND)
            serializer = GroupDetailSerializer(group)
            return Response({'status':'success', 'data':serializer.data}, status=status.HTTP_200_OK)


class ProfileView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def get(self, request):
            user = request.user
            serializer = ProfileSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)


class ExportGroupsView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def post(self, request):
            section = Section.objects.filter(id=request.data.get('section')).first()
            if section is None:
                  return Response(status=status.HTTP_400_BAD_REQUEST)

            filename = f"export/group/{section.batch.name}_{section.gender}.csv"
            path = os.path.join(settings.MEDIA_ROOT, filename)
            f = open(path, 'w', newline='')
            
            writer = csv.writer(f)
            writer.writerow(['Group ID', 'Group CG', 'Student Roll Number', 'Student Name', 'Student email', 'Student CG', 'Preferences'])
            queryset = Group.objects.filter(leader__batch=section.batch, leader__gender=section.gender).all()

            for group in queryset:
                  group_row = [group.id, group.cg]
                  preference_row = []
                  for preference in group.preferences.order_by('priority').all():
                        preference_row.append(f"{preference.room_type_choice.room_type.hostel.name}: {preference.room_type_choice.room_type.name}")
                  leader_row = [group.leader.rollno, group.leader.name, group.leader.user.email, group.leader.cg]
                  row = group_row + leader_row + preference_row
                  writer.writerow(row)
                  for member in group.members.all():
                        member_row = [member.rollno, member.name, member.user.email, member.cg]
                        row = group_row + member_row + preference_row
                        writer.writerow(row)
                  writer.writerow([])
            
            f.close()
            return Response({
                  'link': f"{settings.MEDIA_URL}{filename}"
            }, status=status.HTTP_200_OK)


class ExportStudentsView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def post(self, request):
            batch = Batch.objects.filter(id=request.data.get('batch')).first()
            if batch is None:
                  return Response(status=status.HTTP_400_BAD_REQUEST)
            
            queryset = Student.objects.filter(batch=batch).all()

            filename = f"export/student/batch_{batch.id}.csv"
            path = os.path.join(settings.MEDIA_ROOT, filename)
            f = open(path, 'w', newline='')

            writer = csv.writer(f)
            writer.writerow(['Roll Number', 'Name', 'Email', 'Gender', 'CG'])


            for student in queryset:
                  writer.writerow([student.rollno, student.name, student.user.email, student.gender, student.cg])
            
            f.close()

            return Response({
                  'link': f"{settings.MEDIA_URL}{filename}"
            }, status=status.HTTP_200_OK)


class AllotmentView(APIView):
      permission_classes = [IsAuthenticated & IsAdmin]

      def get(self, request):
            allot_hostel.delay()
            return Response(status=status.HTTP_200_OK)


class createFAQ(APIView):
      permission_classes = [IsAuthenticated, IsAdmin]
      
      def post(self, request):
            question = request.data.get('question')
            answer = request.data.get('answer')
            faq = Faq(question=question, answer=answer)
            faq.save()
            return Response(status=status.HTTP_200_OK)
     

class getFAQ(APIView):
      permission_classes = [IsAuthenticated]
      
      def get(self, request):
            faqs = Faq.objects.all()
            serializer = FAQSerializer(faqs, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

  
class deleteFAQ(APIView):
      permission_classes = [IsAuthenticated, IsAdmin]
      
      def post(self, request):
            id = request.data.get('id')
            faq = Faq.objects.filter(id=id).first()
            if faq is None:
                  return Response(status=status.HTTP_404_NOT_FOUND)
            faq.delete()
            return Response(status=status.HTTP_200_OK)