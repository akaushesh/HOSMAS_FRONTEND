from django.urls import path
from . import views

urlpatterns = [
      path('<slug:model>/create/', views.CreateItemView.as_view(), name='create_item'),
      path('<slug:model>/read/all/', views.ReadAllItemsView.as_view(), name='read_all_items'),
      path('<slug:model>/read/<int:id>/', views.ReadItemView.as_view(), name='read_item'),
      path('<slug:model>/update/<int:id>/', views.UpdateItemView.as_view(), name='update_item'),
      path('<slug:model>/delete/', views.DeleteItemView.as_view(), name='delete_item'),
      path('import-students/', views.ImportStudentsView.as_view(), name='import_students')
]