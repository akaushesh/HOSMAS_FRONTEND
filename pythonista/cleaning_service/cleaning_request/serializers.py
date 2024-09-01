from rest_framework import serializers
from .models import *

class CleaningRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CleaningRequest
        fields = '__all__'