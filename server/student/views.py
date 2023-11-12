from django.core.exceptions import ObjectDoesNotExist

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from .permissions import IsStudent, IsGroupLeader, IsGroupMember

from .models import Student, Group, Invitation
from .serializers import InvitationsReceivedSerializer, InvitationsSentSerializer, StudentSerializer, GroupSerializer, StudentProfileSerializer

# Create your views here.


class ProfileView(APIView):
      permission_classes = [IsAuthenticated & IsStudent]

      def get(self, request):
            student = request.user.student
            serializer = StudentProfileSerializer(student)
            return Response(serializer.data, status=status.HTTP_200_OK)


class SearchStudentView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & IsGroupLeader & ~IsGroupMember]

      def post(self, request):
            resultant = Student.objects.filter(rollno=request.data.get('rollno')).first()
            if resultant is None:
                  return Response(status=status.HTTP_404_NOT_FOUND)
            
            student = request.user.student
            if resultant==student:
                  return Response(status=status.HTTP_412_PRECONDITION_FAILED)

            try:
                  _ = resultant.leader_of_group
                  return Response(status=status.HTTP_412_PRECONDITION_FAILED)
            except ObjectDoesNotExist:
                  if resultant.group is not None or resultant.batch!=student.batch or resultant.gender!=student.gender:
                        return Response(status=status.HTTP_412_PRECONDITION_FAILED)

            if Invitation.objects.filter(for_group=student.leader_of_group, to=resultant).exists():
                  return Response(status=status.HTTP_412_PRECONDITION_FAILED)

            serializer = StudentSerializer(resultant)
            return Response(serializer.data, status=status.HTTP_200_OK)


class SendInvitationView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & IsGroupLeader & ~IsGroupMember]

      def post(self, request):
            invitee = Student.objects.filter(rollno=request.data.get("rollno")).first()
            if invitee is None:
                  return Response({"detail": "Invalid Roll Number"}, status=status.HTTP_400_BAD_REQUEST)

            student = request.user.student
            group = student.leader_of_group

            if invitee.group is not None:
                  if invitee.group.id==group.id:
                        return Response({"detail": "This student is already part of your group"}, status=status.HTTP_403_FORBIDDEN)
                  return Response({"detail": "This student is already part of some another group"}, status=status.HTTP_403_FORBIDDEN)

            if Invitation.objects.filter(to=invitee, for_group=group).exists():
                  return Response({"detail": "You've already sent an invitation to this student"}, status=status.HTTP_403_FORBIDDEN)

            if invitee.batch!=student.batch or invitee.gender!=student.gender:
                  return Response({'detail': 'Inter-gender or Inter-batch groups are not allowed!'}, status=status.HTTP_400_BAD_REQUEST)

            invitation = Invitation(to=invitee, for_group=group)
            invitation.save()

            #TODO: Send mail to invitee and other group members

            return Response(status=status.HTTP_200_OK)


class InvitationsSentView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & IsGroupLeader & ~IsGroupMember]

      def get(self, request):
            group = request.user.student.leader_of_group

            queryset = Invitation.objects.filter(for_group=group)

            serializer = InvitationsSentSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


class WithdrawInvitationView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & IsGroupLeader & ~IsGroupMember]

      def delete(self, request):
            invitation = Invitation.objects.filter(id=request.data.get('id')).first()
            if invitation is None:
                  return Response({"detail": "Invitation not found"}, status=status.HTTP_404_NOT_FOUND)

            invitation.delete()

            #TODO: Send email to invitee and other group members

            return Response(status=status.HTTP_200_OK)


class InvitationsReceivedView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & ~IsGroupLeader & ~IsGroupMember]

      def get(self, request):
            queryset = Invitation.objects.filter(to=request.user.student)
            
            serializer = InvitationsReceivedSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


class AcceptInvitationView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & ~IsGroupLeader & ~IsGroupMember]

      def post(self,request):
            invitation = Invitation.objects.filter(id=request.data.get('id')).first()
            if invitation is None:
                  return Response({'details': 'Invalid invitation id'}, status=status.HTTP_400_BAD_REQUEST)

            student = request.user.student            
            if invitation.to != student:
                  return Response(status=status.HTTP_401_UNAUTHORIZED)
            
            group = invitation.for_group
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

            #TODO: send mail to group leader and all group members

            return Response(status=status.HTTP_200_OK)


class CreateGroupView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & ~IsGroupLeader & ~IsGroupMember]

      def patch(self, request):
            student = request.user.student
            group = Group(leader=student, cg=student.cg)
            group.save()
            return Response(status=status.HTTP_200_OK)


class GroupView(APIView):
      permission_classes = [IsAuthenticated & IsStudent]

      def get(self, request):
            student = request.user.student
            try:
                  group = student.leader_of_group
            except ObjectDoesNotExist:
                  if student.group is None:
                        return Response(status=status.HTTP_404_NOT_FOUND)
                  group = student.group

            serializer = GroupSerializer(group)
            return Response(serializer.data, status=status.HTTP_200_OK)


class TranferGroupLeadershipView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & IsGroupLeader & ~IsGroupMember]

      def post(self, request):
            newleader = Student.objects.filter(rollno=request.data.get('rollno')).first()
            if newleader is None:
                  return Response(status=status.HTTP_400_BAD_REQUEST)
            
            student = request.user.student
            group = student.leader_of_group

            if newleader.group is None or newleader.group!=group:
                  return Response({'detail': 'You can only tranfer ownership to one of your group member'}, status=status.HTTP_400_BAD_REQUEST)

            newleader.group = None
            newleader.save()

            group.leader = newleader
            group.save()

            return Response(status=status.HTTP_200_OK)


class LeaveGroupView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & ~IsGroupLeader & IsGroupMember]

      def patch(self, request):
            student = request.user.student
            student.group = None
            student.save()
            return Response(status=status.HTTP_200_OK)


class DeleteGroupView(APIView):
      permission_classes = [IsAuthenticated & IsStudent & IsGroupLeader]

      def delete(self, request):
            group = request.user.student.leader_of_group
            if group.members.count() > 0:
                  return Response(status=status.HTTP_400_BAD_REQUEST)
            
            group.delete()
            return Response(status=status.HTTP_200_OK)
