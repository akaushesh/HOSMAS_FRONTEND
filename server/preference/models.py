from django.db import models
from django.core.cache import cache
from student.models import GENDER_CHOICES
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Hostel(models.Model):
    name = models.CharField(max_length=100, unique=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    description = models.TextField(blank=True, null=True)
    photos = ArrayField(models.URLField(max_length=2000), blank=True, default=list)
    
    caretaker_name = models.CharField(max_length=200)
    caretaker_email = models.EmailField(max_length=200)
    caretaker_phone_number = models.CharField(max_length=20)
    
    warden_name = models.CharField(max_length=200)
    warden_email = models.EmailField(max_length=200)
    warden_phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class RoomType(models.Model):
    name = models.CharField(max_length=200)
    hostel = models.ForeignKey('preference.Hostel', on_delete=models.CASCADE, related_name='room_types')
    room_size = models.PositiveSmallIntegerField()
    rooms_count = models.PositiveSmallIntegerField()
    photo = models.URLField(max_length=2000, blank=True, default='')
    fee = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('name', 'hostel')

    def __str__(self):
        return f"{self.hostel.name}: {self.name}"


class RoomTypeChoice(models.Model):
    room_type = models.ForeignKey('preference.RoomType', on_delete=models.CASCADE, related_name='choices')
    section = models.ForeignKey('student.Section', on_delete=models.CASCADE, related_name='choices', null=True)
    capacity = models.PositiveIntegerField()

    class Meta:
        unique_together = ('room_type', 'section')

    def __str__(self):
        return f"{self.room_type.hostel.name}: {self.room_type.name} - {self.section}"
    
    def save(self, *args, **kwargs):
        cache.delete(f"choices-{self.section.id}")
        return super().save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
        cache.delete(f"choices-{self.section.id}")
        return super().delete(*args, **kwargs)


class Preference(models.Model):
    room_type_choice = models.ForeignKey('preference.RoomTypeChoice', on_delete=models.CASCADE, related_name='preferences')
    group = models.ForeignKey('student.Group', on_delete=models.CASCADE, related_name='preferences')
    priority = models.SmallIntegerField()

    class Meta:
        unique_together = ('room_type_choice', 'group')

    def __str__(self):
        return f"{self.group}-{self.priority}"
    
    
class Level(models.Model):
    level_no = models.PositiveSmallIntegerField()
    hostel = models.ForeignKey('preference.Hostel', on_delete=models.CASCADE, related_name='levels')
    layout_image = models.URLField(max_length=2000, blank=True, default='')
    
    class Meta:
        unique_together = ('level_no', 'hostel')
    
    def __str__(self):
        return f"{self.hostel.name}: {self.level_no}"


class Room(models.Model):
    room_type = models.ForeignKey('preference.RoomType', on_delete=models.CASCADE, related_name='rooms')
    level = models.ForeignKey('preference.Level', on_delete=models.CASCADE, related_name='rooms')
    # level = models.PositiveSmallIntegerField()
    room_no = models.CharField(max_length=5)
    current_capacity = models.PositiveSmallIntegerField(default=0)
    
    can_allot = models.BooleanField(default=True)
       
    class Meta:
        unique_together = ('room_type', 'room_no')

    def __str__(self):
        return f"{self.level} - {self.room_no}"
    
    def save(self, *args, **kwargs):
        # Check if the instance is being created
        if not self.pk:
            # Get the total_capacity from the associated RoomType object
            total_capacity = self.room_type.room_size

            self.current_capacity = total_capacity

        super().save(*args, **kwargs)
    
    
