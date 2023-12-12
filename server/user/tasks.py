from __future__ import absolute_import, unicode_literals

from config.celery import app

from django.core.cache import cache
from django.core.mail import EmailMultiAlternatives, get_connection
from django.core.mail import send_mail, get_connection
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings

@app.task(name = "send_password_reset_mail")
def send_password_reset_mail(name, url, email):
    idx = cache.get('emailIdIndex', 0)
    cache.set('emailIdIndex', (idx + 1) % settings.EMAIL_HOST_USERS_COUNT)

    connection = get_connection(username=settings.EMAIL_HOST_USERS[idx], password=settings.EMAIL_HOST_PASSWORDS[idx], fail_silently=False)
    connection.open()
    
    subject = f"Password Reset Link of Online Hostel Allocation System for {name}"
    
    context = {
        'name':name,
        'url':url,
    }
    html_message = render_to_string('dashboard/password_reset.html', context)
    msg = strip_tags(html_message)
    
    send_mail(subject, msg, settings.EMAIL_HOST_USERS[idx], (email, ), html_message=html_message, connection=connection, fail_silently=False)
    connection.close()
    
    return f"\n password reset mail sent to {email}\n"