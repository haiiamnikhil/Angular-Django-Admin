from django.db import models
from django.contrib.auth.models import AbstractUser


GENDER_CHOICES=[
    ('Male','Male'),
    ('Female','Female')
]

class UserModel(AbstractUser):
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','password']
    first_name = models.CharField(max_length=20,unique=False,null=True,blank=True)
    last_name = models.CharField(max_length=20,unique=False,null=True,blank=True)
    gender = models.CharField(max_length=10,choices=GENDER_CHOICES)