"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

django_asgi_application = get_asgi_application()

from preference.routing import websocket_url_patterns
from preference.middleware_channels import JwtAuthMiddleware

application = ProtocolTypeRouter({
    "http": django_asgi_application,
    "websocket": JwtAuthMiddleware(
        URLRouter(
            websocket_url_patterns
        )
    )
})
