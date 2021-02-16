from django.urls import path,include
from .views import *

urlpatterns = [
    path('dashboard/',Dashboard,name='dashboard'),
    
    path('user/profile/',UserProfile,name='userprofile'),
]