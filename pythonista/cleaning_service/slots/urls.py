from django.urls import path
from .views import *
urlpatterns = [
    path('getSlots/', getSlots.as_view()),
    path('createSlot/', createSlot.as_view()),
]