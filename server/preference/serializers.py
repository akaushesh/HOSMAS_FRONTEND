from rest_framework.serializers import ModelSerializer, SerializerMethodField, SlugRelatedField
from rest_framework import serializers
from .models import *
from student.models import Student
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


class RoomSerializer(ModelSerializer):
    # Room serializer to show room data to students

    class Meta:
        model = Room
        fields = ('id', 'room_no', 'current_capacity')


class StudentAllotedRoomSerializer(ModelSerializer):
    level = SerializerMethodField()
    alloted_room_number = RoomSerializer(read_only=True)

    def get_level(self, obj):
        return obj.alloted_room_number.level.level_no

    class Meta:
        model = Student
        fields = ('name', 'rollno', 'level', 'alloted_room_number')


class LevelSerializer(ModelSerializer):
    class Meta:
        model = Level
        fields = ('level_no', 'layout_image')