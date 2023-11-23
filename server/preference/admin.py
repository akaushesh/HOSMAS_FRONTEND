from django.contrib import admin
from .models import *


class HostelAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    
class RoomTypeAdmin(admin.ModelAdmin):
    list_display = ('id','name','hostel')


class RoomTypeChoiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'section', 'room_type')

    def delete_queryset(self, request, queryset):
        for item in queryset:
            cache.delete(f"choices-{item.section.id}")
        queryset.delete()

admin.site.register(Hostel,HostelAdmin)
admin.site.register(RoomType,RoomTypeAdmin)
admin.site.register(RoomTypeChoice, RoomTypeChoiceAdmin)
admin.site.register(Preference)
