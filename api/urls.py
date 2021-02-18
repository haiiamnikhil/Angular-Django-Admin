from django.urls import path,include
from .views import *

urlpatterns = [
    path('login/',LoginUserView,name='loginview'),
    path('login-auth/',LoginAuth,name='loginauth'),
    
    path('register/',RegisterUserView,name='registerview'),
    path('register-user/',RegisterUser, name='registeruser'),

    path('dashboard/',Dashboard,name='dashboard'),
    
    path('email/',EmailView,name='emailview'),
    path('email/readmail/',ReadmailView,name='readmail'),
    path('email/compose/',ComposeView,name='readmail'),
    
    path('user/profile/',UserProfile,name='userprofile'),
    
    path('user/listusers/',ListUsersView,name='listusersview'),
    
    path('logout-user/',LogoutUser,name='logoutuser'),
]