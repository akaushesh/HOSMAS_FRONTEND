from django.contrib import admin
from .models import Faq, AllotmentLogsGroup, AllotmentLogsStudent, AllotmentStatus
# Register your models here.


class FAQAdmin(admin.ModelAdmin):
      list_display = ('id', 'question', 'answer')


class AllotmentStatusAdmin(admin.ModelAdmin):
      def sections(self, obj):
            return ', '.join(f"{section.batch.name}_{section.gender}" for section in obj.sections.all())

      list_display = ('id', 'sections', 'retained_students_cnt', 'retained_groups_cnt', 'alloted_students_cnt', 'alloted_groups_cnt', 'partial_allot_students_cnt', 'partial_allot_groups_cnt')


admin.site.register(Faq, FAQAdmin)
admin.site.register(AllotmentStatus, AllotmentStatusAdmin)
