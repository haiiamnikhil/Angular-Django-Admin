from django.urls import path,include
from .views import *

urlpatterns = [
    path('login/',LoginUserView,name='loginview'),
    
    path('register/',RegisterUserView,name='registerview'),
    
    path('dashboard/',Dashboard,name='dashboard'),
    
    path('user/profile/',UserProfile,name='userprofile'),
    
    path('user/listusers/',ListUsersView,name='listusersview')
]