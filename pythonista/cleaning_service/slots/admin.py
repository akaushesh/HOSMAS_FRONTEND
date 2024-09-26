from django.contrib import admin
from .models import Slot


class SlotAdmin(admin.ModelAdmin):
    list_display = ('id', 'hostel_id', 'start', 'end', 'is_enabled')
    list_filter = ('hostel_id', 'is_enabled')

admin.site.register(Slot, SlotAdmin)
