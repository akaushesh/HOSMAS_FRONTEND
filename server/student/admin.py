from django.contrib import admin
from .models import *

# Register your models here.

class StudentAdmin(admin.ModelAdmin):

      def batch__name(self, obj):
            return obj.batch.name
      
      def current_hostel(self, obj):
            if obj.current_room is None:
                  return None
            return f"{obj.current_room.hostel.name}: {obj.current_room.name}"
      
      def preview_hostel(self, obj):
            if obj.preview_room is None:
                  return None
            return f"{obj.preview_room.hostel.name}: {obj.preview_room.name}"
      
      def alloted_hostel(self, obj):
            if obj.alloted_room is None:
                  return None
            return f"{obj.alloted_room.hostel.name}: {obj.alloted_room.name}"
      
      # def alloted_room(self, obj):
      #       if obj.alloted_room_number is None:
      #             return None
      #       return f"{obj.alloted_room_number.level.level_no}: {obj.alloted_room_number.name}"

      list_display = ('id', 'user', 'name', 'rollno', 'phoneno', 'gender', 'cg', 'batch__name', 'current_hostel', 'preview_hostel', 'alloted_hostel', 'alloted_room_number')
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

      list_display = ('id', 'batch__name', 'gender', 'is_allotment_enabled', 'is_retain_allowed', 'group_size_limit', 'is_allotment_result_public', 'is_room_allotment_enabled')
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


class DefaulterAdmin(admin.ModelAdmin):
      def student_name(self, obj):
            return obj.student.name
      
      def student_email(self, obj):
            return obj.student.user.email
      
      def student_rollno(self, obj):
            return obj.student.rollno

      list_display = ('id', 'student_name', 'student_rollno', 'student_email')
      search_fields = ('student__name', 'student__rollno', 'student__user__email')


admin.site.register(Student, StudentAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Batch, BatchAdmin)
admin.site.register(Section, SectionAdmin)
admin.site.register(Invitation, InvitationAdmin)
admin.site.register(Defaulter, DefaulterAdmin)
