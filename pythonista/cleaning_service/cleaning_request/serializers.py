from rest_framework import serializers
from .models import *

class CleaningRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CleaningRequest
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'