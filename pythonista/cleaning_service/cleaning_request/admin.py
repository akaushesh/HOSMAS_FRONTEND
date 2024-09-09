from django.contrib import admin
from .models import CleaningRequest

class CleaningRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'student_id', 'worker', 'hostel_id', 'hostel_name', 'preferred_slots', 'slot', 'block', 'room_number', 'status')

admin.site.register(CleaningRequest, CleaningRequestAdmin)
