from django.urls import path

from .views import getCleaningRequests

urlpatterns = [
    path('get_cleaning_requests/', getCleaningRequests.as_view())
]