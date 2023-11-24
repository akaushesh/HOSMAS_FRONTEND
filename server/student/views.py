from django.core.exceptions import ObjectDoesNotExist

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from .permissions import IsStudent, IsNotDefaulter, IsPreferenceFillingLive, IsGroupLeader, IsGroupMember, IsNotGroupLeader, IsNotGroupMember

from .models import Student, Group, Invitation
from .serializers import InvitationsReceivedSerializer, InvitationsSentSerializer, StudentSerializer, GroupSerializer, StudentProfileSerializer

from django.core.files.storage import default_storage
from datetime import datetime

from dashboard.tasks import add_users
from .tasks import *
# Create your views here.


class ProfileView(APIView):
      permission_classes = [IsAuthenticated, IsStudent]

      def get(self, request):
            student = Student.objects.filter(user=request.user).select_related('batch', 'leader_of_group', 'group__leader', 'alloted_room__hostel').first()
            serializer = StudentProfileSerializer(student)
            return Response(serializer.data, status=status.HTTP_200_OK)


class SearchStudentView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsNotDefaulter, IsPreferenceFillingLive, IsNotGroupMember]

      def post(self, request):
            student = Student.objects.filter(user=request.user).select_related('batch', 'leader_of_group').first()
            resultant = Student.objects.filter(rollno=request.data.get('rollno')).select_related('batch', 'group', 'defaulter').first()

            if resultant is None:
                  return Response({'detail': 'No student found!'}, status=status.HTTP_403_FORBIDDEN)

            try:
                  _ = invitee.defaulter
                  return Response({"detail": "This student is suspended from Hostel Allocation Process"}, status=status.HTTP_403_FORBIDDEN)
            except ObjectDoesNotExist:
                  pass
            
            if resultant==student:
                  return Response({'detail': 'You can\'t send invitation to yourself!'}, status=status.HTTP_403_FORBIDDEN)

            if resultant.batch!=student.batch:
                  return Response({'detail': 'You can only send invitation to a student with same batch!'}, status=status.HTTP_403_FORBIDDEN)

            if resultant.gender!=student.gender:
                  return Response({'detail': 'You can only send invitation to a student with same gender!'}, status=status.HTTP_403_FORBIDDEN)

            try:
                  group = student.leader_of_group
                  if resultant.group==group:
                        return Response({'detail': 'This student is already part of your group!'}, status=status.HTTP_403_FORBIDDEN)
                  if Invitation.objects.filter(for_group=group, to=resultant).exists():
                        return Response({'detail': 'You\'ve already sent an invitation to this student!'}, status=status.HTTP_403_FORBIDDEN)
            
                  members_count = group.members.count()
                  if members_count >= 3:
                        return Response({'detail': 'You\'re group is already full!'}, status=status.HTTP_400_BAD_REQUEST)
            
            except ObjectDoesNotExist:
                  pass

            serializer = StudentSerializer(resultant)
            return Response(serializer.data, status=status.HTTP_200_OK)


class SendInvitationView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsNotDefaulter, IsPreferenceFillingLive, IsNotGroupMember]

      def post(self, request):
            student = Student.objects.filter(user=request.user).select_related('leader_of_group', 'batch').first()
            
            try:
                  group = student.leader_of_group
                  members_count = group.members.count()
                  if members_count >= 3:
                        return Response({'detail': 'You\'re group is already full!'}, status=status.HTTP_400_BAD_REQUEST)
            except ObjectDoesNotExist:
                  group = Group(leader=student, cg=student.cg)
                  group.save()
            
            invitee = Student.objects.filter(rollno=request.data.get("rollno")).select_related('group', 'batch', 'defaulter').first()
            if invitee is None:
                  return Response({"detail": "Invalid Roll Number!"}, status=status.HTTP_403_FORBIDDEN)

            try:
                  _ = invitee.defaulter
                  return Response({"detail": "This student is suspended from Hostel Allocation Process"}, status=status.HTTP_403_FORBIDDEN)
            except ObjectDoesNotExist:
                  pass
            
            if invitee==student or (invitee.group is not None and invitee.group.id==group.id):
                  return Response({"detail": "This student is already part of your group!"}, status=status.HTTP_403_FORBIDDEN)

            if Invitation.objects.filter(to=invitee, for_group=group).exists():
                  return Response({"detail": "You've already sent an invitation to this student!"}, status=status.HTTP_403_FORBIDDEN)

            if invitee.batch!=student.batch or invitee.gender!=student.gender:
                  return Response({'detail': 'Inter-gender or Inter-batch groups are not allowed!'}, status=status.HTTP_403_FORBIDDEN)

            invitation = Invitation(to=invitee, for_group=group)
            invitation.save()

            send_invitation_mail.delay(student.name, request.user.email, student.rollno, invitee.name, invitee.user.email)

            return Response({'status':'success'} , status=status.HTTP_200_OK)


class InvitationsSentView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsPreferenceFillingLive, IsGroupLeader]

      def get(self, request):
            group = request.user.student.leader_of_group

            queryset = Invitation.objects.filter(for_group=group).select_related('to').all()

            serializer = InvitationsSentSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


class InvitationsReceivedView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsPreferenceFillingLive]

      def get(self, request):
            queryset = Invitation.objects.filter(to=request.user.student).select_related('for_group__leader').all()
            
            serializer = InvitationsReceivedSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


class DeleteInvitationView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsPreferenceFillingLive]

      def delete(self, request):
            invitation = Invitation.objects.filter(id=request.data.get('id')).first()
            if invitation is None:
                  return Response({"detail": "Invitation not found"}, status=status.HTTP_403_FORBIDDEN)

            invitation.delete()

            return Response(status=status.HTTP_200_OK)


class AcceptInvitationView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsNotDefaulter, IsPreferenceFillingLive]

      def post(self,request):
            invitation = Invitation.objects.filter(id=request.data.get('id')).select_related('for_group').first()
            if invitation is None:
                  return Response({'detail': 'Invalid invitation id!'}, status=status.HTTP_403_FORBIDDEN)

            student = Student.objects.filter(user=request.user).select_related('leader_of_group', 'group__leader').prefetch_related('group__members').first()  

            if invitation.to != student:
                  return Response({'detail': 'You\'re not authorized to accept someone\'s invitation!'}, status=status.HTTP_403_FORBIDDEN)

            group = invitation.for_group

            if group.members.count() >= 3:
                  return Response({'detail': 'Unable to accept this invitation because the group is already full!'}, status=status.HTTP_403_FORBIDDEN)
            
            try:
                  curr_group = student.leader_of_group
                  if (curr_group.members.count()>0):
                        return Response({'detail': 'You\'re a group leader! First tranfer your group ownership in order to accept any invitation.'}, status=status.HTTP_403_FORBIDDEN)
                  
                  rev_invitation = Invitation.objects.filter(to=group.leader, for_group=curr_group).first()
                  if rev_invitation is not None:
                        rev_invitation.delete()
                  
                  curr_group.delete()
            except ObjectDoesNotExist:
                  pass

            if student.group is not None:
                  prevgroup = student.group
                  updatedcg = prevgroup.leader.cg
                  cnt = 1
                  for member in prevgroup.members.all():
                        updatedcg += member.cg
                        cnt += 1
                  updatedcg /= cnt
                  prevgroup.cg = round(updatedcg, 2)
                  prevgroup.save()
                  # inform all previous group members to say goodbye
                  members = prevgroup.members.all()
                  for member in members:
                        left_group_mail.delay(member.name, student.name, student.rollno, member.user.email)
                  left_group_mail.delay(prevgroup.leader.name, student.name, student.rollno, prevgroup.leader.user.email )

            student.group = group
            student.save()

            invitation.delete()

            updatedcg = group.leader.cg
            cnt = 1
            for member in group.members.all():
                  updatedcg += member.cg
                  cnt += 1
            updatedcg /= cnt
            group.cg = round(updatedcg, 2)
            group.save()
            
            # email to leader and members
            lead = group.leader
            joined_group_mail.delay(lead.name, lead.user.email, lead.rollno, student.name, student.user.email)
            joined_group_to_members.delay(lead.name, student.name, student.rollno, group.leader.user.email)
            members = group.members.all()
            for member in members:
                  joined_group_to_members.delay(member.name, student.name, student.rollno, member.user.email)

            return Response(status=status.HTTP_200_OK)


class GroupView(APIView):
      permission_classes = [IsAuthenticated, IsStudent]

      def get(self, request):
            student = Student.objects.filter(user=request.user).select_related('leader_of_group__leader', 'group__leader').prefetch_related('group__members').first()
            try:
                  group = student.leader_of_group
            except ObjectDoesNotExist:
                  if student.group is None:
                        return Response({'detail': 'You\'re not a part of any group!'}, status=status.HTTP_403_FORBIDDEN)
                  group = student.group

            serializer = GroupSerializer(group, context={'student': student})
            return Response(serializer.data, status=status.HTTP_200_OK)


class TranferGroupLeadershipView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsPreferenceFillingLive, IsGroupLeader]

      def post(self, request):
            newleader = Student.objects.filter(rollno=request.data.get('rollno')).select_related('group').first()
            if newleader is None:
                  return Response({'detail': 'Invalid student roll number!'}, status=status.HTTP_403_FORBIDDEN)
            
            student = Student.objects.filter(user=request.user).select_related('leader_of_group').first()
            group = student.leader_of_group

            if newleader.group is None or newleader.group!=group:
                  return Response({'detail': 'You can only tranfer ownership to one of your group member!'}, status=status.HTTP_403_FORBIDDEN)

            newleader.group = None
            newleader.save()

            group.leader = newleader
            group.save()
            
            student.group = group
            student.save()
            
            members = group.members.all()
            for member in members:
                  send_teamleader_change_mail.delay(group.leader.name,group.leader.rollno,member.user.email)
            send_teamleader_change_mail.delay(group.leader.name,group.leader.rollno,group.leader.user.email)
            
            return Response(status=status.HTTP_200_OK)


class LeaveGroupView(APIView):
      permission_classes = [IsAuthenticated, IsStudent, IsPreferenceFillingLive]

      def patch(self, request):
            student = Student.objects.filter(user=request.user).select_related('leader_of_group', 'group').first()
            try:
                  _ = student.leader_of_group
                  return Response({'detail': 'You must tranfer the group ownership to one of the group members to leave this group!'}, status=status.HTTP_403_FORBIDDEN)
            except:
                  group = student.group
                  if group is None:
                        return Response({'detail': 'Only a Group Member is authorized to perform this action!'}, status=status.HTTP_403_FORBIDDEN)
            student.group = None
            student.save()
            group = Group(leader = student, cg = student.cg)
            group.save()
            
            left_group_mail.delay(group.leader.name, student.name, student.rollno, group.leader.user.email)
            
            members = group.members.all()
            for member in members:
                  left_group_mail.delay(member.name, student.name, student.rollno, member.user.email)
            return Response(status=status.HTTP_200_OK)
