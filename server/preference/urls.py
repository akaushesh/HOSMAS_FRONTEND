from django.urls import path
from . import views

urlpatterns = [
    path('choices/', views.getAvailableChoices.as_view()),
    path('create/', views.createPreference.as_view()),
    path('delete/', views.deletePreferences.as_view()),
]