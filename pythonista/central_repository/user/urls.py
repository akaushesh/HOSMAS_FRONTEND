from django.urls import path

from . import views


urlpatterns = [
    path("", views.ProfileView.as_view()),
    path("<int:slug>/", views.getStudentProfile.as_view()),
    path("initiate-reset-password/", views.EmailResetPasswordView.as_view()),
    path("reset-password/", views.ResetPasswordView.as_view()),
]
