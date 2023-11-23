from django.db import models
from django.core.cache import cache
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

    def __str__(self):
        return f"{self.hostel.name}: {self.name}"


class RoomTypeChoice(models.Model):
    room_type = models.ForeignKey('preference.RoomType', on_delete=models.CASCADE, related_name='choices')
    section = models.ForeignKey('student.Section', on_delete=models.CASCADE, related_name='choices', null=True)
    capacity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.room_type.name}-{self.section}"
    
    def save(self, *args, **kwargs):
        cache.delete(f"choices-{self.section.id}")
        super().save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
        cache.delete(f"choices-{self.section.id}")
        super().delete(*args, **kwargs)


class Preference(models.Model):
    room_type_choice = models.ForeignKey('preference.RoomTypeChoice', on_delete=models.CASCADE, related_name='preferences')
    group = models.ForeignKey('student.Group', on_delete=models.CASCADE, related_name='preferences')
    priority = models.SmallIntegerField()

    def __str__(self):
        return f"{self.group}-{self.priority}"
