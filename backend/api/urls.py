from django.urls import path
from api import views

urlpatterns = [
    path('users/', views.UserViewSet.as_view({'get': 'list'}), name='index'),
    path('users/create/', views.UserCreateView.as_view(), name='create'),
    path('users/login/', views.LoginView.as_view(), name='login'),
]