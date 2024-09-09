from django.contrib import admin
from .models import *
# Register your models here.

class WorkerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'photo', 'hostel_id', 'is_active')

admin.site.register(Worker, WorkerAdmin)