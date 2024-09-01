from django.urls import path
from .views import worker_list, mark_attendance

urlpatterns = [
    path('workers/', worker_list, name='worker_list'),
    path('workers/<int:worker_id>/mark-attendance/', mark_attendance, name='mark_attendance'),
]