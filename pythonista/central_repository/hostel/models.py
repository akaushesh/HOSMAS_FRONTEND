from django.db import models

from common.models import TimeStampedModel


class Hostel(TimeStampedModel):
    name = models.CharField(max_length=100)
    image_url = models.URLField(max_length=5000, null=True, default=None)

    class Meta:
        db_table = "hostel"

    def __str__(self):
        return self.name


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

    def __str__(self):
        return f"{self.name} - {self.hostel}"


class Level(TimeStampedModel):
    name = models.CharField(max_length=10)

    block = models.ForeignKey(
        "hostel.Block",
        on_delete=models.CASCADE,
        related_name="levels",
        null=True,
        default=None,
    )

    class Meta:
        db_table = "level"

    def __str__(self):
        return f"{self.name} - {self.block}"


class Block(TimeStampedModel):
    name = models.CharField(max_length=10)

    hostel = models.ForeignKey(
        "hostel.Hostel", on_delete=models.CASCADE, related_name="blocks"
    )

    class Meta:
        db_table = "block"

    def __str__(self):
        return f"{self.name} - {self.hostel}"


class Room(TimeStampedModel):
    name = models.CharField(max_length=50)

    room_type = models.ForeignKey(
        "hostel.RoomType", on_delete=models.CASCADE, related_name="rooms"
    )
    level = models.ForeignKey(
        "hostel.Level", on_delete=models.CASCADE, related_name="rooms"
    )

    class Meta:
        db_table = "room"

    def __str__(self):
        return f"{self.name} - {self.level}"
