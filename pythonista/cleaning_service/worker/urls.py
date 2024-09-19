from django.urls import path
from .views import *

urlpatterns = [
    path('createWorker/', createWorker.as_view()),

    path('hostels/<int:hostel_id>/workers/', HostelWorkersPublicView.as_view()),
    path('workers/<int:worker_id>/', getSingleWorker.as_view()),

    path('workers/<int:worker_id>/mark-attendance/', markWorkerAttendance.as_view()),
]