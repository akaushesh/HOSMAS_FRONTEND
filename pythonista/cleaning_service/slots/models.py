from django.db import models

# Create your models here.
class Slot(models.Model):
    hostel_id = models.IntegerField()
    start = models.TimeField()
    end = models.TimeField()
    is_enabled = models.BooleanField(default=True)
    
    class Meta:
        unique_together = ('hostel_id', 'start', 'end')
    
    def __str__(self):
        return str(self.hostel_id) + " " + str(self.start) + " - " + str(self.end)