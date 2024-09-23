from django.urls import path
from .views import *

urlpatterns = [
    path('workers/mark-attendance/', markWorkerAttendance.as_view()),
    path('getWorkers/', getMultipleWorkers.as_view()),
    path('getWorkers/<int:slug>/', getSingleWorker.as_view()),
    path('createWorker/', createWorker.as_view()),

    path('hostels/<int:hostel_id>/workers/', HostelWorkersPublicView.as_view()),
]