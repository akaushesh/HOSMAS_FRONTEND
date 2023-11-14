from django.contrib import admin
from .models import *


class HostelAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    
class RoomTypeAdmin(admin.ModelAdmin):
    list_display = ('id','name','hostel')

admin.site.register(Hostel,HostelAdmin)
admin.site.register(RoomType,RoomTypeAdmin)
admin.site.register(RoomTypeChoice)
admin.site.register(Preference)
