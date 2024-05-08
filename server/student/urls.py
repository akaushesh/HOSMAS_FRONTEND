from django.urls import path
from . import views

urlpatterns = [
      path('profile/', views.ProfileView.as_view(), name='view_student_profile'),
      path('search/', views.SearchStudentView.as_view(), name='search_student'),
      path('invitation/send/', views.SendInvitationView.as_view(), name='send_invitation'),
      path('invitation/view/sent/', views.InvitationsSentView.as_view(), name='view_sent_invitations'),
      path('invitation/view/received/', views.InvitationsReceivedView.as_view(), name='view_received_invitations'),
      path('invitation/reject/', views.RejectInvitationView.as_view(), name='delete_invitation'),
      path('invitation/accept/', views.AcceptInvitationView.as_view(), name='accept_invitation'),
      path('group/view/', views.GroupView.as_view(), name='view_group'),
      path('group/transfer/', views.TranferGroupLeadershipView.as_view(), name='transfer_leadership'),
      path('group/leave/', views.LeaveGroupView.as_view(), name='leave_group'),
]
