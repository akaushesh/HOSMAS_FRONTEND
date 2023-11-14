from django.db import models
from student.models import GENDER_CHOICES

# Create your models here.


class Hostel(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    caretaker_email = models.EmailField(max_length=200)
    caretaker_name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class RoomType(models.Model):
    name = models.CharField(max_length=200)
    hostel = models.ForeignKey('preference.Hostel', on_delete=models.CASCADE, related_name='room_types')
    room_size = models.PositiveSmallIntegerField()
    rooms_count = models.PositiveSmallIntegerField()
    is_allotment_enabled = models.BooleanField()

    def __str__(self):
        return self.name


class RoomTypeChoice(models.Model):
    room_type = models.ForeignKey('preference.RoomType', on_delete=models.CASCADE, related_name='choices')
    batch = models.ForeignKey('student.Batch', on_delete=models.CASCADE, related_name='choices')
    capacity = models.PositiveIntegerField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    def __str__(self):
        return f"{self.room_type.name}-{self.batch.name}"


class Preference(models.Model):
    room_type_choice = models.ForeignKey('preference.RoomType', on_delete=models.CASCADE, related_name='preferences')
    group = models.ForeignKey('student.Group', on_delete=models.CASCADE, related_name='preferences')
    priority = models.SmallIntegerField()

    def __str__(self):
        return f"{self.group}-{self.priority}"
