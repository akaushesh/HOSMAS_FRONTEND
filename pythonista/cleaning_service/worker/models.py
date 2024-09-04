from django.db import models
from datetime import date

# Create your models here.
class Worker(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=12, unique=True)
    photo = models.URLField(max_length=2000, blank=True, null=True)
    hostel_id = models.IntegerField()
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name + ' ' + self.hostel
    
    
class Attendance(models.Model):
    worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
    date = models.DateField(default=date.today)
    is_present = models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.worker.name} - {self.date} - {"Present" if self.is_present else "Absent"}'
    
    
    