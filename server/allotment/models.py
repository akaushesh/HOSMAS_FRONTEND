from django.db import models
# from login.models import User, Student


    

class Group (models.Model):
    leader = models.OneToOneField('login.Student', on_delete=models.CASCADE, related_name='leader_of_group')
    cg = models.FloatField(null=False, blank=False)
    
    def __str__(self):
        return self.leader.email



    
    
class Batch(models.Model):
    name = models.CharField(max_length=50, unique=True, null=False, blank=False)
    groups = models.ManyToManyField(Group, related_name='batch')
    students = models.ManyToManyField('login.Student', related_name='batch')
    
    def __str__(self):
        return self.name