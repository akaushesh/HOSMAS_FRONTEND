from django.contrib import admin
from .models import Faq
# Register your models here.

class FAQAdmin(admin.ModelAdmin):
      list_display = ('id', 'question', 'answer')

admin.site.register(Faq, FAQAdmin)
