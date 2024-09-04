from rest_framework import serializers

from .models import User, Student, Supervisor


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "email")


class StudentProfileSerializer(serializers.ModelSerializer):
    email = serializers.SlugRelatedField(
        slug_field="email", read_only=True, source="user"
    )
    room = serializers.SerializerMethodField()

    def get_room(self, obj):
        return (
            {
                "id": obj.room.id,
                "name": obj.room.name,
                "level": (obj.room.level.name if obj.room.level is not None else None),
                "block": (obj.room.block.name if obj.room.block is not None else None),
                "room_type": (
                    obj.room.room_type.name if obj.room.room_type is not None else None
                ),
                "hostel": (
                    {
                        "id": obj.room.level.hostel.id,
                        "name": obj.room.level.hostel.name,
                    }
                    if obj.room.level is not None and obj.room.level.hostel is not None
                    else None
                ),
            }
            if obj.room is not None
            else None
        )

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
