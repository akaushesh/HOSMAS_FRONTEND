from django.urls import path
from . import views

urlpatterns = [
    path('getChoices/', views.getAvailableChoices.as_view()),
    path('createPreference/', views.createPreference.as_view()),
    path('deletePreference/', views.deletePreferences.as_view()),
    path('getPreference/', views.getPreferences.as_view()),
    path('retain/', views.Retain.as_view()),
]