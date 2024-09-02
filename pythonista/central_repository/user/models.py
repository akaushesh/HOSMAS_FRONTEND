from django.contrib.auth.models import AbstractBaseUser
from django.db import models

from common.models import TimeStampedModel

from .managers import UserManager


class User(AbstractBaseUser):
    email = models.EmailField(
        max_length=250,
        unique=True,
    )

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    password_reset_slug = models.CharField(
        max_length=150, unique=True, null=True, blank=True, default=None
    )

    @property
    def is_staff(self):
        return self.is_admin

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def get_short_name(self):
        # The user is identified by their email
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    class Meta:
        db_table = "user"

    def __str__(self):
        return self.email


class Student(TimeStampedModel):
    name = models.CharField(max_length=200)
    roll_number = models.CharField(max_length=15, unique=True)
    phone_number = models.CharField(max_length=20, unique=True)
    branch = models.CharField(max_length=100)

    user = models.OneToOneField(
        "user.User", on_delete=models.RESTRICT, related_name="student"
    )

    room = models.ForeignKey(
        "hostel.Room", on_delete=models.RESTRICT, related_name="students"
    )

    class Meta:
        db_table = "student"


class Supervisor(TimeStampedModel):
    name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)

    hostel = models.ForeignKey(
        "hostel.Hostel", on_delete=models.RESTRICT, related_name="supervisors"
    )

    user = models.OneToOneField(
        "user.User", on_delete=models.RESTRICT, related_name="supervisor"
    )

    class Meta:
        db_table = "supervisor"
