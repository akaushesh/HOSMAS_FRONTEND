from django.contrib import admin
from django.contrib.auth.models import Group
from .models import *

# Register your models here.

class UserAdmin(admin.ModelAdmin):
      list_display = ('id', 'email', 'is_student', 'is_admin', 'is_staff', 'is_superuser')
      list_filter = ('is_student', 'is_admin', 'is_staff', 'is_superuser')
      search_fields = ('email', )


class ResetSlugAdmin(admin.ModelAdmin):
      def user__email(self, obj):
            return obj.user.email

      list_display = ('id', 'user', 'slug')
      search_fields = ('user__email', 'slug')


admin.site.register(User, UserAdmin)
admin.site.register(ResetSlug, ResetSlugAdmin)
admin.site.unregister(Group)
