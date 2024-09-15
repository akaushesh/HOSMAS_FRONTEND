from django.urls import path
from .consumers import WorkerPendingRequestsConsumer

websocket_url_patterns = [
    path('ws/workers/<int:worker_id>/pending-requests/', WorkerPendingRequestsConsumer.as_asgi()),
]