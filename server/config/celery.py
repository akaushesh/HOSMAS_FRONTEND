from __future__ import absolute_import, unicode_literals

from celery import Celery
from kombu import Queue, Exchange
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

app = Celery('config')

app.conf.task_queues = [
      Queue('hms-default'),
      Queue('hms-priority'),
      Queue('hms-admin-task'),
]

app.conf.task_default_queue = 'hms-default'

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()