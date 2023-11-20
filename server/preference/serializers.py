from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from rest_framework import serializers
from .models import *
from dashboard.serializers import RoomTypeChoiceSerializer

class PreferenceSerializer(ModelSerializer):
    room_type_name = SerializerMethodField()
    hostel_name = SerializerMethodField()

    class Meta:
        model = Preference
        fields = ['id', 'room_type_name', 'hostel_name', 'priority']
    
    def get_room_type_name(self, obj):
        return obj.room_type_choice.room_type.name
    
    def get_hostel_name(self, obj):
        return obj.room_type_choice.room_type.hostel.name