from django.contrib import admin

from .models import Block, Hostel, Level, Room, RoomType


class HostelAdmin(admin.ModelAdmin):
    def room_types(self, obj):
        return obj.room_types.count()

    def levels(self, obj):
        cnt = 0
        for b in obj.blocks.all():
            cnt += b.levels.count()
        return cnt

    def blocks(self, obj):
        return obj.blocks.count()

    def rooms(self, obj):
        rooms_cnt = 0
        for block in obj.blocks.all():
            for level in block.levels.all():
                rooms_cnt += level.rooms.count()
        return rooms_cnt

    def students(self, obj):
        students_cnt = 0
        for block in obj.blocks.all():
            for level in block.levels.all():
                rooms = level.rooms.all()
                for room in rooms:
                    students_cnt += room.students.count()
        return students_cnt

    list_display = ("id", "name", "room_types", "levels", "blocks", "rooms", "students")
    search_fields = ("name", "room_types")


class RoomTypeAdmin(admin.ModelAdmin):
    def rooms(self, obj):
        return obj.rooms.count()

    def students(self, obj):
        rooms = obj.rooms.all()
        students_cnt = 0
        for room in rooms:
            students_cnt += room.students.count()
        return students_cnt

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
        rooms = obj.rooms.all()
        students_cnt = 0
        for room in rooms:
            students_cnt += room.students.count()
        return students_cnt

    list_display = (
        "id",
        "name",
        "block__name",
        "block__hostel__name",
        "rooms",
        "students",
    )
    list_filter = ("block__hostel__name",)
    search_fields = ("name",)


class BlockAdmin(admin.ModelAdmin):
    def levels(self, obj):
        return obj.levels.count()

    def rooms(self, obj):
        rooms_cnt = 0
        for level in obj.levels.all():
            rooms_cnt += level.rooms.count()
        return rooms_cnt

    def students(self, obj):
        students_cnt = 0
        for level in obj.levels.all():
            for room in level.rooms.all():
                students_cnt += room.students.count()
        return students_cnt

    list_display = ("id", "name", "hostel__name", "levels", "rooms", "students")
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
        "level__block__name",
        "level__block__hostel__name",
        "students",
    )
    list_filter = (("level__block__hostel__name"),)
    search_fields = ("name",)


admin.site.register(Hostel, HostelAdmin)
admin.site.register(RoomType, RoomTypeAdmin)
admin.site.register(Level, LevelAdmin)
admin.site.register(Block, BlockAdmin)
admin.site.register(Room, RoomAdmin)
