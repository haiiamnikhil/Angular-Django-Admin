from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password


def Dashboard(request):
    return render(request, 'dashboard.html')


def UserProfile(request):
    return render(request,"userprofile.html")

def ListUsersView(request):
    return render(request,"listusers.html")

@csrf_exempt
def LoginUserView(request):
    return render(request,"login.html")

@csrf_exempt
def LoginAuth(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            return JsonResponse({'message': 'User Already Loged In','status':True},safe=False,status=200)
        else:
            data = JSONParser().parse(request)
            user = authenticate(username=data['username'],password=data['password'])
            if user:
                login(request, user)
                return JsonResponse({'message': 'Login successful','status': True},safe=False,status=200)
            else:
                return JsonResponse({'message':'Login Failed','status':False},safe=False,status=200)


def RegisterUserView(request):
    return render(request,"register.html")

@csrf_exempt
def RegisterUser(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        
        if UserModel.objects.filter(username=data['username']).exists() or UserModel.objects.filter(email=data['email']).exists():
            return JsonResponse({'message':"User Name or Email Already Registered",'status':False},safe=False,status=200)
        
        else:
            UserModel.objects.create(username=data['username'],
            password=make_password(data['password']),email=data['email'], first_name=data['first_name'],last_name=data['last_name'])
            return JsonResponse({'message':"User Sucessfully Registerd",'status':True},safe=False,status=200)