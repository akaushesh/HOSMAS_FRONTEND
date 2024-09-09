from django.urls import path
from .views import *

urlpatterns = [
    path('workers/<int:worker_id>/mark-attendance/', markWorkerAttendance.as_view()),
    path('getWorkers/', getMultipleWorkers.as_view()),
    path('getWorkers/<int:slug>/', getSingleWorker.as_view()),
    path('createWorker/', createWorker.as_view()),
]