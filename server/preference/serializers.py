from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from rest_framework import serializers
from .models import *

class PreferenceSerializer(ModelSerializer):
    class Meta:
        model = Preference
        fields = '__all__'