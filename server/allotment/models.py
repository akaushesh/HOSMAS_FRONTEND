from django.db import models
from login.models import Student

class Group (models.Model):
    leader = models.OneToOneField(Student, on_delete=models.CASCADE, related_name='group')
    cg = models.FloatField(null=False, blank=False)
    
    def __str__(self):
        return self.leader.name


class Batch(models.Model):
    name = models.CharField(max_length=50, unique=True, null=False, blank=False)
    groups = models.ManyToManyField(Group, related_name='batch')
    students = models.ManyToManyField(Student, related_name='batch')
    
    def __str__(self):
        return self.name