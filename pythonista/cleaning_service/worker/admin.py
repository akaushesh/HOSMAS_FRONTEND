from django.contrib import admin
from .models import *
# Register your models here.

class WorkerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'photo', 'hostel_id', 'is_active')


class AttendanceAdmin(admin.ModelAdmin):
    list_display = ('id', 'worker', 'date', 'levels')
    list_filter = ('worker', 'date')
    search_fields = ('worker__name', 'worker__phone_number')

admin.site.register(Worker, WorkerAdmin)
admin.site.register(Attendance, AttendanceAdmin)
