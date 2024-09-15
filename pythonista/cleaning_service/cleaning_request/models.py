from django.db import models
from django.contrib.postgres.fields import ArrayField


status_options = [
    ('Pending', 'Pending'),
    ('Assigned', 'Assigned'),
    ('Completed', 'Completed'),
]

# Create your models here.
class CleaningRequest(models.Model):
    student_id = models.IntegerField()

    room_id = models.BigIntegerField(default=0)
    hostel_id = models.IntegerField()
    level_id = models.BigIntegerField(default=0)
    
    hostel_name = models.CharField(max_length=50, default=' ')
    block = models.CharField(max_length=3, null=True, blank=True)
    level = models.CharField(max_length=3, null=True, blank=True)
    room_number = models.CharField(max_length=10)
    
    preferred_slots = ArrayField(models.IntegerField(), null=True, blank=True, default=list)
    preferred_dates = ArrayField(models.DateField(), null=True, blank=True, default=list)
    status = models.CharField(max_length=10, choices=status_options, default='Pending')
    
    worker = models.ForeignKey('worker.Worker', on_delete=models.SET_NULL, null=True, blank=True)
    slot = models.ForeignKey('slots.Slot', on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateField(null=True, default=None, blank=True)
    
    def __str__(self):
        return str(self.hostel_id) + " " + self.block + " " + self.room_number + " " + str(self.slot)
    
class Feedback(models.Model):
    request = models.ForeignKey(CleaningRequest, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField()
    comments = models.TextField()
    
    def __str__(self):
        return f"{self.request} - {self.rating}"
