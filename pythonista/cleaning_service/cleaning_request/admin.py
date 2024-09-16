from django.contrib import admin
from .models import CleaningRequest, Feedback


class CleaningRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'student_id', 'worker', 'slot', 'date', 'hostel_id', 'level_id', 'hostel_name', 'preferred_slots', 'preferred_dates', 'block', 'room_number', 'status')
    list_filter = ('status', 'worker', 'date', 'hostel_name')


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('id', 'request', 'rating', 'comments')
    list_filter = ('rating',)


admin.site.register(CleaningRequest, CleaningRequestAdmin)
admin.site.register(Feedback, FeedbackAdmin)
