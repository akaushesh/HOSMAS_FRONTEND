from django.urls import path
from . import views

urlpatterns = [
      path('import-students/', views.ImportStudentsView.as_view(), name='import_students'),
      path('getStudents/', views.getStudents.as_view()),
      path('getGroups/', views.getGroups.as_view()),
      path('profile/', views.ProfileView.as_view()),
      path('export/groups/', views.ExportGroupsView.as_view()),
      path('export/students/', views.ExportStudentsView.as_view()),
      path('allocate/', views.AllotmentView.as_view()),
      path('<slug:model>/create/', views.CreateObjectView.as_view(), name='create_object'),
      path('<slug:model>/view/multiple/', views.GetMultipleObjectsView.as_view(), name='view_multiple_objects'),
      path('<slug:model>/view/<int:id>/', views.GetObjectView.as_view(), name='view_object'),
      path('<slug:model>/update/<int:id>/', views.UpdateObjectView.as_view(), name='update_object'),
      path('<slug:model>/delete/', views.DeleteObjectView.as_view(), name='delete_object'),
]