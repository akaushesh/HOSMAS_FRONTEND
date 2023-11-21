from django.db import models

# Create your models here.

GENDER_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female')
)


class Student (models.Model):
    user = models.OneToOneField('user.User', on_delete=models.CASCADE, related_name='student')

    name = models.CharField(max_length=100, null=False, blank=False)
    rollno = models.CharField(max_length=12, unique=True, null=False, blank=False)

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    cg = models.FloatField(null=False, blank=False)

    group = models.ForeignKey('student.Group', null=True, blank = True, on_delete=models.SET_NULL, related_name='members')    

    batch = models.ForeignKey('student.Batch', on_delete=models.CASCADE, related_name='students')

    current_room = models.ForeignKey('preference.RoomType', on_delete=models.SET_NULL, null=True, blank=True, related_name='current_students')
    alloted_room = models.ForeignKey('preference.RoomType', on_delete=models.SET_NULL, null=True, blank=True, related_name='alloted_students')

    def __str__(self):
      return self.name


class Group (models.Model):
    leader = models.OneToOneField('student.Student', on_delete=models.CASCADE, related_name='leader_of_group')
    cg = models.FloatField(null=False, blank=False)
    is_retained = models.BooleanField(default=False)
    is_preferences_filled = models.BooleanField(default=False)

    def __str__(self):
        return self.leader.name


class Batch(models.Model):
    name = models.CharField(max_length=50, unique=True, null=False, blank=False)

    def __str__(self):
        return self.name


class Section(models.Model):
    batch = models.ForeignKey('student.Batch', on_delete=models.CASCADE, related_name='sections')
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    is_allotment_enabled = models.BooleanField(default=False)
    is_retain_allowed = models.BooleanField(default=False)

    class Meta:
        unique_together = ('batch', 'gender')
    
    def __str__(self):
        return f"{self.batch.name}-{self.gender}"


class Invitation(models.Model):
    to = models.ForeignKey('student.Student',  on_delete=models.CASCADE, related_name='invitations')
    for_group = models.ForeignKey('student.Group', on_delete=models.CASCADE, related_name='invitations')
    time = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return f"{self.for_group.id}-{self.to.name}"
