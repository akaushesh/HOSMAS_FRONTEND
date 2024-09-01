from rest_framework import serializers
from .models import CleaningRequest

class CleaningRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CleaningRequest
        fields = '__all__'  # Include all fields, or specify the ones you need
