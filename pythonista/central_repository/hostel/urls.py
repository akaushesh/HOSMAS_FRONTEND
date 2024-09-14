from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.HostelAllView.as_view()),
    path("<int:hostel_id>/", views.HostelSingleView.as_view()),
]
