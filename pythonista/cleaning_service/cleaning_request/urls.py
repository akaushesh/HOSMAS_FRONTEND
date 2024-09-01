from django.urls import path
from .views import cleaning_request_list, assign_cleaning_requests

urlpatterns = [
    path('cleaning-requests/', cleaning_request_list, name='cleaning_request_list'),
    path('assign-cleaning-requests/<int:worker_id>/', assign_cleaning_requests, name='assign_cleaning_requests'),
]
