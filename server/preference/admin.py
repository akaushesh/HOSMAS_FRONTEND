from django.contrib import admin
from .models import *


class HostelAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'gender', 'warden_name', 'caretaker_name')
    list_filter = ('gender', )
    search_fields = ('name', 'caretaker_name', 'caretaker_email', 'warden_name', 'warden_email')


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


class LevelAdmin(admin.ModelAdmin):
    def hostel_name(self, obj):
        return obj.hostel.name
    
    def rooms_count(self, obj):
        return obj.rooms.count()
    
    list_display = ('id', 'level_no', 'hostel_name', 'rooms_count', 'layout_image')
    list_filter = ('hostel', )
    search_fields = ('level_no', 'hostel__name')


class RoomAdmin(admin.ModelAdmin):
    def hostel_name(self, obj):
        return obj.room_type.hostel.name
    
    def room_type_name(self, obj):
        return obj.room_type.name
    
    def level_no(self, obj):
        return obj.level.level_no
    
    list_display = ('id', 'hostel_name', 'room_type_name',  'level_no', 'room_no',  'current_capacity')
    list_filter = ('level', 'room_type')
    search_fields = ('room_no', 'room_type__hostel__name', 'room_type__name')

admin.site.register(Hostel, HostelAdmin)
admin.site.register(RoomType, RoomTypeAdmin)
admin.site.register(RoomTypeChoice, RoomTypeChoiceAdmin)
admin.site.register(Preference, PreferenceAdmin)
admin.site.register(Level, LevelAdmin)
admin.site.register(Room, RoomAdmin)
