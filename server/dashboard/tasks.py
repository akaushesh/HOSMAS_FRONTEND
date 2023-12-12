from __future__ import absolute_import, unicode_literals

from django.db.models import Q
from django.core.mail import send_mail, get_connection
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.core.cache import cache

from config.celery import app


@app.task(name = "send_reminder_mail")
def send_reminder_mail(name, email):
      subject = "Hi " + name +", Reminder for filling Hostel Preferences"
      
      idx = cache.get('emailIdIndex', 0)
      cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
      
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()
      context = {
            "name" : name
      }
      html_message = render_to_string('dashboard/remindermail.html', context)
      msg = strip_tags(html_message)
      
      send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
      connection.close()
      
      return f"\nReminder mail sent to {email}\n"


@app.task(name = "send_start_allocation_mail")
def send_start_allocation_mail(name,email, slug):
      subject = f"Hi {name}, Hostel Preference Filling Process has Started"
      
      idx = cache.get('emailIdIndex', 0)
      cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)
      
      connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
      connection.open()
      context = {
            "name" : name,
            "url": "https://allotment.onlinehostel.in/auth/forgot-password/" + slug,
      }
      html_message = render_to_string('dashboard/startallocationmail.html', context)
      msg = strip_tags(html_message)
      
      send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
      connection.close()
      
      return f"\nStart allocation mail sent to {email}\n"
