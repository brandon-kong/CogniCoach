from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.serializers import UserSerializer

from .models import User

# Create your views here.

def index(APIView):
    def get(self, request):
        return Response({'message': 'Hello, World!'})
    

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('email')
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class UserCreateView(CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class LoginView(RetrieveAPIView):
	permission_classes = [IsAuthenticated]
	serializer_class = UserSerializer

	def get_object(self):
		return self.request.user