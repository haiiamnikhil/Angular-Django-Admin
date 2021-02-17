from rest_framework import serializers
from .models import *


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    