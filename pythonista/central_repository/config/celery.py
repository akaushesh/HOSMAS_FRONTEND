from __future__ import absolute_import, unicode_literals

from celery import Celery
from decouple import config
from kombu import Queue, Exchange
import os

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    config("DJANGO_SETTINGS_MODULE", default="config.production.settings"),
)

app = Celery("config")

app.config_from_object("django.conf:settings", namespace="CELERY")

app.autodiscover_tasks()
