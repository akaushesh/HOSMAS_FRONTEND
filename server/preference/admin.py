from django.contrib import admin
from .models import *


class HostelAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'gender', 'caretaker_email', 'caretaker_name')
    list_filter = ('gender', )
    search_fields = ('name', )


class RoomTypeAdmin(admin.ModelAdmin):
    def hostel__name(self, obj):
        return obj.hostel.name

    list_display = ('id', 'name', 'hostel__name', 'room_size', 'rooms_count', 'fee')
    list_filter = ('hostel', )
    search_fields = ('name', 'hostel__name')


class RoomTypeChoiceAdmin(admin.ModelAdmin):
    def batch(self, obj):
        return obj.section.batch.name
    
    def gender(self, obj):
        return obj.section.gender
    
    def room_type__name(self, obj):
        return f"{obj.room_type.hostel.name}: {obj.room_type.name}"

    list_display = ('id', 'section', 'batch', 'gender', 'room_type__name', 'capacity')

    def delete_queryset(self, request, queryset):
        for item in queryset:
            cache.delete(f"choices-{item.section.id}")
        queryset.delete()


class PreferenceAdmin(admin.ModelAdmin):
    def room_type(self, obj):
        return obj.room_type_choice.room_type.name
    
    def group__leader__name(self, obj):
        return obj.group.leader.name
    
    def group__leader__rollno(self, obj):
        return obj.group.leader.rollno
    
    list_display = ('id', 'room_type_choice', 'room_type', 'group__leader__name', 'group__leader__rollno', 'priority')
    search_fields = ('group__id', 'group__leader__name', 'group__leader__rollno')


admin.site.register(Hostel, HostelAdmin)
admin.site.register(RoomType, RoomTypeAdmin)
admin.site.register(RoomTypeChoice, RoomTypeChoiceAdmin)
admin.site.register(Preference, PreferenceAdmin)
