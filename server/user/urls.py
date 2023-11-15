from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('change-password/', views.ChangePasswordView.as_view(), name='chage_password'),
    path('initiate-reset-password/', views.EmailResetPasswordView.as_view(), name='initiate_reset_password'),
    path('reset-password/', views.ResetPasswordView.as_view(), name='reset_password')
]
