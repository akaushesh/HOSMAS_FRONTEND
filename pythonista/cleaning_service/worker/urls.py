from django.urls import path
from .views import markWorkerAttendance

urlpatterns = [
    path('workers/<int:worker_id>/mark-attendance/', markWorkerAttendance.as_view()),
]