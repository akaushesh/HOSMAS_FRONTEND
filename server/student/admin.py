from django.contrib import admin
from .models import *

# Register your models here.

class StudentAdmin(admin.ModelAdmin):

      def batch__name(self, obj):
            return obj.batch.name

      list_display = ('id', 'user', 'name', 'rollno', 'phoneno', 'gender', 'cg', 'batch__name')
      list_filter = ('gender', 'batch')
      search_fields = ('user__email', 'name', 'rollno', 'phoneno')


class GroupAdmin(admin.ModelAdmin):

      def leader__name(self, obj):
            return obj.leader.name
      
      def leader__rollno(self, obj):
            return obj.leader.rollno
      
      def group_size(self, obj):
            return obj.members.count() + 1

      list_display = ('id', 'leader__name', 'leader__rollno', 'group_size', 'cg', 'is_retained', 'is_preferences_filled')
      list_filter = ('is_retained', 'is_preferences_filled')
      search_fields = ('leader__user__email', 'leader__rollno', 'leader__name')


class BatchAdmin(admin.ModelAdmin):
      list_display = ('id', 'name')
      search_fields = ('name', )


class SectionAdmin(admin.ModelAdmin):

      def batch__name(self, obj):
            return obj.batch.name

      list_display = ('id', 'batch__name', 'gender')
      list_filter = ('gender', )
      search_fields = ('batch__name', )


class InvitationAdmin(admin.ModelAdmin):

      def to__name(self, obj):
            return obj.to.name
      
      def to__rollno(self, obj):
            return obj.to.rollno
      
      def for_group__id(self, obj):
            return obj.for_group.id
      
      def for_group__leader__name(self, obj):
            return obj.for_group.leader.name
      
      def for_group__leader__rollno(self, obj):
            return obj.for_group.leader.rollno
      
      
      list_display = ('id', 'to__name', 'to__rollno', 'for_group__id', 'for_group__leader__name', 'for_group__leader__rollno', 'time')
      search_fields = ('to__name', 'to__rollno', 'for_group__leader__name', 'for_group__leader__rollno')


admin.site.register(Student, StudentAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Batch, BatchAdmin)
admin.site.register(Section, SectionAdmin)
admin.site.register(Invitation, InvitationAdmin)
