from django.shortcuts import render
from django.http import JsonResponse
from .models import *


def Dashboard(request):
    return render(request, 'dashboard.html')


def UserProfile(request):
    return render(request,"userprofile.html")


def LoginUserView(request):
    return render(request,"login.html")


def RegisterUserView(request):
    return render(request,"register.html")