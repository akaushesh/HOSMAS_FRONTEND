from django.urls import path

from . import views


urlpatterns = [
    path("", views.ProfileView.as_view()),
    path("<int:slug>/", views.getStudentProfile.as_view()),
]
