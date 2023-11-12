from django.urls import path
from . import views

urlpatterns = [
    path('choices/', views.getAvailableChoices.as_view()),
    path('create/', views.CreatePreference.as_view()),
]