from django.urls import path

from .views import *

urlpatterns = [
    path('getCleaningRequests/', getCleaningRequests.as_view()),
    path('getCleaningRequests/<int:slug>/', getSingleCleaningRequest.as_view()),
    path('createCleaningRequests/', createCleaningRequests.as_view()),
    path('assignCleaningRequests/<int:worker_id>/', assignCleaningRequests.as_view()),
    path('assign-floors-to-workers/', AssignFloorsToWorkersView.as_view()),
    path('assign-requests-to-workers/', AssignRequestsToWorkersView.as_view()),
]