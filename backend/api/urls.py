from django.urls import path
from api import views

from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('users/', views.UserViewSet.as_view({'get': 'list'}), name='index'),
    path('users/create/', views.UserCreateView.as_view(), name='create'),
    path('users/login/', views.LoginView.as_view(), name='login'),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]