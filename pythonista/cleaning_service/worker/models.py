from datetime import date

from django.contrib.postgres.fields import ArrayField
from django.db import models


class Worker(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=12, unique=True)
    photo = models.URLField(max_length=2000, blank=True, null=True)
    hostel_id = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name + ' ' + str(self.hostel_id)
    
    
class Attendance(models.Model):
    worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    date = models.DateField(default=date.today)
    is_present = models.BooleanField(default=False)
    levels = ArrayField(models.BigIntegerField(), default=list, blank=True)
    
    def __str__(self):
        return f'{self.worker.name} - {self.date} - {"Present" if self.is_present else "Absent"}'
    
    
    