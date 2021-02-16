from django.shortcuts import render
from django.http import JsonResponse
from .models import *


def Dashboard(request):
    return render(request, 'dashboard.html')


def UserProfile(request):
    return render(request,"userprofile.html")