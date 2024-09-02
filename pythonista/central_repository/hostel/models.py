from django.db import models

from common.models import TimeStampedModel


class Hostel(TimeStampedModel):
    name = models.CharField(max_length=100)

    class Meta:
        db_table = "hostel"


class RoomType(TimeStampedModel):
    name = models.CharField(max_length=50)
    room_capacity = models.PositiveSmallIntegerField()
    is_ac = models.BooleanField()
    is_toilet_attached = models.BooleanField()

    hostel = models.ForeignKey(
        "hostel.Hostel", on_delete=models.CASCADE, related_name="room_types"
    )

    class Meta:
        db_table = "room_type"


class Level(TimeStampedModel):
    name = models.CharField(max_length=10)

    hostel = models.ForeignKey(
        "hostel.Hostel", on_delete=models.CASCADE, related_name="levels"
    )

    class Meta:
        db_table = "level"


class Block(TimeStampedModel):
    name = models.CharField(max_length=10)

    hostel = models.ForeignKey(
        "hostel.Hostel", on_delete=models.CASCADE, related_name="blocks"
    )

    class Meta:
        db_table = "block"


class Room(TimeStampedModel):
    name = models.CharField(max_length=50)

    room_type = models.ForeignKey(
        "hostel.RoomType", on_delete=models.CASCADE, related_name="rooms"
    )
    level = models.ForeignKey(
        "hostel.Level", on_delete=models.CASCADE, related_name="rooms"
    )
    block = models.ForeignKey(
        "hostel.Block",
        on_delete=models.CASCADE,
        related_name="rooms",
        null=True,
        blank=True,
        default=None,
    )

    class Meta:
        db_table = "room"
