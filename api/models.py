from django.db import models
from django.contrib.auth.models import AbstractUser


GENDER_CHOICES=[
    ('Male','Male'),
    ('Female','Female')
]

ORG_CHOICES=[
    ('Information Technology','Information Technology'),
    ('Banking','Banking'),
    ('Business','Business'),
    ('Whole Scale','Whole Scale')
]

class UserModel(AbstractUser):
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','password']
    first_name = models.CharField(max_length=20,unique=False,null=True,blank=True)
    last_name = models.CharField(max_length=20,unique=False,null=True,blank=True)
    phone = models.CharField(max_length=12,unique=False,null=True,blank=False)
    organisation_name = models.CharField(max_length=100,unique=False,null=True,blank=False)
    organisation_sector = models.CharField(max_length=50,choices=ORG_CHOICES,null=True)
    organisation_domain = models.CharField(max_length=100,unique=False,null=True,blank=False) 
    gender = models.CharField(max_length=10,choices=GENDER_CHOICES)