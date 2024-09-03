from django.db import models

status_options = [
    ('Pending', 'Pending'),
    ('Assigned', 'Assigned'),
    ('Completed', 'Completed'),
]

# Create your models here.
class CleaningRequest(models.Model):
    student_id = models.IntegerField()
    worker = models.ForeignKey('worker.Worker', on_delete=models.SET_NULL, null=True, blank=True)
    slot = models.ForeignKey('slots.Slot', on_delete=models.CASCADE)
    hostel_id = models.IntegerField()
    hostel_name = models.CharField(max_length=50)
    block = models.CharField(max_length=3)
    room_number = models.CharField(max_length=10)
    status = models.CharField(max_length=10, choices=status_options, default='Pending')
    
    def __str__(self):
        return str(self.hostel_id) + " " + self.block + " " + self.room_number + " " + str(self.slot)
    
class Feedback(models.Model):
    request = models.ForeignKey(CleaningRequest, on_delete=models.CASCADE)
    photo = models.URLField(max_length=2000, blank=True,null=True)
    rating = models.PositiveSmallIntegerField()
    comments = models.TextField()
    
    def __str__(self):
        return f"{self.request} - {self.rating}"
    
    def save(self, *args, **kwargs):
        self.request.status = 'Completed'
        self.request.save()
        return super().save(*args, **kwargs)
    
