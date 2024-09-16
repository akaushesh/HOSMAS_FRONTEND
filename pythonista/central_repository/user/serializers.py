from rest_framework import serializers

from .models import User, Student, Supervisor
from hostel.models import Room


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "email")


class StudentProfileRoomSerializer(serializers.ModelSerializer):
    room_type = serializers.SerializerMethodField()
    level = serializers.SerializerMethodField()
    block = serializers.SerializerMethodField()
    hostel = serializers.SerializerMethodField()

    def get_room_type(self, obj):
        return {
            "id": obj.room_type.id,
            "name": obj.room_type.name,
        }

    def get_level(self, obj):
        return {
            "id": obj.level.id,
            "name": obj.level.name,
        }

    def get_block(self, obj):
        return {
            "id": obj.level.block.id,
            "name": obj.level.block.name,
        }

    def get_hostel(self, obj):
        return {
            "id": obj.level.block.hostel.id,
            "name": obj.level.block.hostel.name,
        }

    class Meta:
        model = Room
        fields = ("id", "name", "room_type", "level", "block", "hostel")


class StudentProfileSerializer(serializers.ModelSerializer):
    email = serializers.SlugRelatedField(
        slug_field="email", read_only=True, source="user"
    )
    room = StudentProfileRoomSerializer(read_only=True)

    class Meta:
        model = Student
        fields = (
            "id",
            "name",
            "roll_number",
            "email",
            "phone_number",
            "branch",
            "room",
        )


class SupervisorProfileSerializer(serializers.ModelSerializer):
    email = serializers.SlugRelatedField(
        slug_field="email", read_only=True, source="user"
    )
    hostel = serializers.SerializerMethodField()

    def get_hostel(self, obj):
        return (
            (
                {
                    "id": obj.hostel.id,
                    "name": obj.hostel.name,
                }
            )
            if obj.hostel is not None
            else None
        )

    class Meta:
        model = Supervisor
        fields = ("id", "name", "email", "phone_number", "hostel")
