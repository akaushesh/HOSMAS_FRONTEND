from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .managers import UserManager
from allotment.models import Group


GENDER_CHOICES = (
    (1,'MALE'),
    (2,'FEMALE')
)

'''
there are only 2 genders :)

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣶⣶⣾⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠷⠾⠿⠶⠶⠶⠿⣷⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣴⡶⠿⠟⠛⠛⠛⠻⠭⠭⠤⠤⠤⠒⠒⠛⠛⠉⢉⣉⣉⣉⡉⠉⠉⠓⠲⠤⣄⡀⠀⠀⠀⠀⠀⠈⠻⢿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⡾⠟⠉⠁⠔⠊⠛⠓⠒⠒⠢⠤⠤⠤⠶⠶⠖⠒⠛⠉⠉⠉⠉⢉⣉⣉⠉⠙⠓⠲⢤⣄⡉⠲⢤⡀⠀⠀⠀⠀⠈⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⡿⠋⠀⠀⠀⠀⣀⡤⠔⠒⠒⠒⠒⠲⠦⠤⠀⠀⠀⠀⠀⠀⠀⣠⠂⠀⠀⠀⠈⠉⠉⠓⠒⠤⣍⠳⢤⡈⠒⢄⡀⠀⠀⠀⢻⣿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⠀⠀⠀⠀⠀⡐⠁⠀⠀⠀⠀⠀⠀⠀⠢⡀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢆⠙⠢⡀⠀⠀⠀⠀⠀⢻⣷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣾⡟⠀⠀⠀⠀⠀⠁⠀⢀⣀⣀⣀⣀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⠿⢿⣿⣿⣿⣿⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⡄⠀⠀⠀⠀⠀
⠀⢀⣴⡿⠋⣀⣀⣀⠀⠤⢄⢠⣾⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⡀⠀⠀⠀⠀⣴⣿⠏⠉⣀⣠⣼⣿⣿⣿⣿⣿⣭⣿⣧⠀⢠⣤⡄⠀⠀⢀⣴⣶⣢⡿⢿⣶⣄⠀⠀⠀
⢠⣿⠟⡡⠚⣉⠄⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠛⠛⠻⢿⣿⠿⠛⠀⠀⠀⠀⠻⢿⣶⡾⠟⠛⠉⠉⢠⣄⡀⠉⠉⠉⠉⠀⠃⣀⣤⣤⣶⣶⣤⣤⡀⠈⠙⠪⠻⣷⡄⠀
⣿⡿⡸⠁⡏⢠⣶⣾⣿⣶⣶⣤⡀⢀⣀⡀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠈⠻⢿⣶⣤⣤⣤⣶⣾⠿⠟⠉⣴⠀⠀⠉⠻⣷⡀⠀⢁⠘⣿⡆
⣿⡇⡇⠀⡇⠈⠀⠀⢠⣆⠈⠿⠿⠿⠟⠀⠀⠀⢀⣴⡿⠟⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣧⣀⠀⠀⢹⣿⠀⢸⠀⢸⣿
⠘⣿⣧⠀⠳⠄⠀⠀⣾⣿⠀⠀⠀⠀⠀⢀⣠⣾⣿⠋⠀⠀⠀⠀⠀⠀⣀⣀⣈⡙⠛⢻⣧⠓⠲⠖⠒⠢⠀⠀⢀⣀⣤⣶⣾⠟⠋⠉⢹⣿⠿⣷⡆⣸⡿⠀⡘⠀⢸⣿
⠀⠙⣿⡝⠒⢤⠀⣼⣿⣿⣤⡀⠀⠤⠚⠉⠘⠋⠛⣷⣄⠀⠀⡀⠀⠚⠿⠟⠛⠟⢠⣿⠇⠀⠀⣀⣠⣴⣶⣿⡿⢿⣿⠉⠀⠀⢀⣠⣿⡏⠀⠀⠀⡿⠁⢠⠇⢠⣿⠇
⠀⠀⢹⣿⡄⠀⢀⣿⣿⡿⢻⣿⣷⣦⣄⣀⡀⠀⠀⠈⠛⢿⠿⠃⠀⠀⠀⣀⣀⣠⣤⣴⣶⣾⠿⠟⠛⠉⠁⠀⢀⣾⣿⣤⣶⣾⣿⣿⠟⠁⠀⠀⠀⠤⠒⢉⣴⡿⠋⠀
⠀⠀⠀⣿⣇⠀⢸⣿⣿⡇⣼⡟⠈⠙⣿⡟⠿⠿⣿⣶⣶⣶⣶⠾⠿⣿⡿⠟⠛⠛⠋⠉⠹⣿⡄⠀⣀⣠⣤⣶⣿⣿⣿⠟⠉⣰⣿⠋⠀⠀⠀⠀⠀⢐⣾⡿⠋⠀⠀⠀
⠀⠀⠀⢹⣿⠀⢸⣿⣿⣷⣿⣿⣀⣸⣿⣁⣀⠀⠀⢸⣿⠁⠀⠀⠀⣿⡇⠀⠀⢀⣀⣀⣤⣿⣿⣿⣿⣿⠿⠛⠉⢿⣇⣀⣴⡿⠁⠀⠀⠀⠀⠀⢠⣿⠟⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⠋⠉⠀⠀⠀⠀⢘⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⣼⡏⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⡏⠀⠀⢹⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⡿⠛⠉⠁⠀⠀⠈⢿⣧⠀⠀⢀⣠⣾⡿⠛⠁⠀⠀⠀⠀⠀⠀⢀⣼⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⡇⠀⠀⠈⢿⣧⣿⡇⢹⣿⡄⠹⣿⡄⠀⠈⢿⣇⠀⠀⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⢈⣿⣷⣾⡿⠟⠉⠀⠀⡀⠀⠀⢀⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⡇⠀⠀⠀⠈⠻⠿⣷⣶⣿⣷⣤⣿⣿⣄⣀⣘⣿⣀⣀⣀⣀⣸⣿⣤⣤⣤⣶⣶⣿⠿⠟⠋⠁⣀⡤⠖⢋⣩⡴⠞⢉⣤⣾⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢰⣿⠀⠀⢀⠀⠀⠠⡀⠀⠈⠉⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠋⠉⠉⠁⠀⣀⡤⠖⢋⣡⡴⠞⠋⣡⣤⣾⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⠀⠀⠸⡀⠀⠀⠙⠶⣤⣀⣀⠀⠀⠈⠉⠉⠉⠉⠉⠉⢉⠉⣁⣀⣀⡀⠤⠖⣚⣩⠥⠖⠛⠉⣁⣤⣶⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⠀⠀⠀⠉⠲⢤⣄⣀⡀⠀⠈⠉⠉⠉⠀⠀⠀⣀⣉⣁⣀⡭⠭⠤⠒⠒⠋⠉⠁⢀⣠⣴⣶⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⣀⣤⣶⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠻⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣴⣾⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠙⠻⠿⢿⢶⣶⣶⣶⣶⣶⣶⢾⠿⠿⠛⠛⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
'''


# Students different model, because admins are not students

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    
    
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    is_student = models.BooleanField(default=True)
    
    objects = UserManager()
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    def get_short_name(self):
        # The user is identified by their email
        return self.email
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True
    
    def has_module_perms(self, app_label):
           return True
    
    def __str__(self):
        return self.email
    
class Student (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student')
    name = models.CharField(max_length=100, null=False, blank=False)
    rollno = models.CharField(max_length=12, unique=True, null=False, blank=False)
    branch = models.CharField(max_length=50, null=False, blank=False)
    gender = models.PositiveSmallIntegerField(choices=GENDER_CHOICES, default=1)
    cg = models.FloatField(null=False, blank=False)
    group = models.ForeignKey(Group, null=True, blank = True)    
    
    def __str__(self):
        return self.name

    
    