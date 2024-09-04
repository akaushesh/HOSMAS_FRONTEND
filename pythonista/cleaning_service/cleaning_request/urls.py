from django.urls import path

from .views import *

urlpatterns = [
    path('getCleaningRequests/', getCleaningRequests.as_view()),
    path('getCleaningRequests/<int:slug>/', getSingleCleaningRequest.as_view()),
    path('createCleaningRequests/', createCleaningRequests.as_view()),
]