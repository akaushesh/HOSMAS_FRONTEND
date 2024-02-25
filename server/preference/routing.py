from django.urls import path
from .consumers import RoomPreferenceConsumer

websocket_url_patterns = [
    path('ws/preference/level/<int:level>/room/', RoomPreferenceConsumer.as_asgi()),
]