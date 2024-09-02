from django.contrib import admin
from django.db.models import Count, Sum

from .models import Block, Hostel, Level, Room, RoomType


class HostelAdmin(admin.ModelAdmin):
    def room_types(self, obj):
        return obj.room_types.count()

    def levels(self, obj):
        return obj.levels.count()

    def blocks(self, obj):
        return obj.blocks.count()

    def rooms(self, obj):
        return obj.levels.aggregate(rooms_count=Count("rooms")).aggregate(
            Sum("rooms_count")
        )

    def students(self, obj):
        return obj.levels.aggregate(students_count=Count("rooms__students")).aggregate(
            Sum("students_count")
        )

    list_display = ("id", "name", "room_types", "levels", "blocks", "rooms", "students")
    search_fields = ("name", "room_types")


class RoomTypeAdmin(admin.ModelAdmin):
    def rooms(self, obj):
        return obj.rooms.count()

    def students(self, obj):
        return obj.rooms.aggregate(students_count=Count("students")).aggregate(
            Sum("students_count")
        )

    list_display = (
        "id",
        "name",
        "hostel__name",
        "room_capacity",
        "is_ac",
        "is_toilet_attached",
        "rooms",
        "students",
    )
    list_filter = ("hostel__name", "room_capacity", "is_ac", "is_toilet_attached")
    search_fields = ("name",)


class LevelAdmin(admin.ModelAdmin):
    def rooms(self, obj):
        return obj.rooms.count()

    def students(self, obj):
        return obj.rooms.aggregate(students_count=Count("students")).aggregate(
            Sum("students_count")
        )

    list_display = ("id", "name", "hostel__name", "rooms", "students")
    list_filter = ("hostel__name",)
    search_fields = ("name",)


class BlockAdmin(admin.ModelAdmin):
    def rooms(self, obj):
        return obj.rooms.count()

    def students(self, obj):
        return obj.rooms.aggregate(students_count=Count("students")).aggregate(
            Sum("students_count")
        )

    list_display = ("id", "name", "hostel__name", "rooms", "students")
    list_filter = ("hostel__name",)
    search_fields = ("name",)


class RoomAdmin(admin.ModelAdmin):
    def students(self, obj):
        return obj.students.count()

    list_display = (
        "id",
        "name",
        "room_type__name",
        "level__name",
        "block__name",
        "level__hostel__name",
        "students",
    )
    list_filter = (("level__hostel__name"),)
    search_fields = ("name",)


admin.site.register(Hostel, HostelAdmin)
admin.site.register(RoomType, RoomTypeAdmin)
admin.site.register(Level, LevelAdmin)
admin.site.register(Block, BlockAdmin)
admin.site.register(Room, RoomAdmin)
