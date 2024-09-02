from django.contrib import admin
from django.contrib.auth.models import Group
from django.core.exceptions import ObjectDoesNotExist

from .models import Student, Supervisor, User


class UserAdmin(admin.ModelAdmin):
    def user_type(self, obj):
        try:
            obj.student
            return "Student"
        except ObjectDoesNotExist:
            pass
        try:
            obj.supervisor
            return "Supervisor"
        except ObjectDoesNotExist:
            return None

    def user_name(self, obj):
        try:
            return obj.student.name
        except ObjectDoesNotExist:
            pass
        try:
            return obj.supervisor.name
        except ObjectDoesNotExist:
            return None

    list_display = (
        "id",
        "email",
        "is_active",
        "is_admin",
        "user_type",
        "user_name",
        "password_reset_slug",
    )
    list_filter = ("is_active", "is_admin")
    search_fields = (
        "email",
        "student__name",
        "student__roll_number",
        "supervisor__name",
    )


class StudentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "roll_number",
        "user__email",
        "phone_number",
        "room__name",
        "room__room_type__name",
        "room__level__name",
        "room__block__name",
        "room__level__hostel__name",
    )
    list_filter = ("room__level__hostel__name",)
    search_fields = ("name", "roll_number", "phone_number", "user__email")


class SupervisorAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "user__email", "phone_number", "hostel__name")
    list_filter = ("hostel__name",)
    search_fields = ("name", "user__email", "phone_number")


admin.site.register(User, UserAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(Supervisor, SupervisorAdmin)
admin.site.unregister(Group)
