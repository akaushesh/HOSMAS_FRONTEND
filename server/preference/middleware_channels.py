from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError

from channels.middleware import BaseMiddleware
from channels.auth import AuthMiddlewareStack

from django.db import close_old_connections
from django.contrib.auth.models import AnonymousUser

from asgiref.sync import sync_to_async


class JwtAuthMiddleware(BaseMiddleware):
    def __init__(self, inner):
        self.inner = inner

    async def __call__(self, scope, receive, send):
       # Close old database connections to prevent usage of timed out connections
        close_old_connections()

        # set default user as anonymous user
        scope['user'] = AnonymousUser()

        # get the query parameters bytes-like object, decode and made a list
        qs = scope['query_string'].decode('utf-8').split('&')

        # Get the token value from query string
        token = ''
        for q in qs:
            q = q.split('=')
            if q[0]=='t':
                token = q[1]

        # get authentication backend
        backend = JWTAuthentication()

        if token != '':
            try:
                # get validated token
                token = await sync_to_async(backend.get_validated_token)(token)

                print(token)

                # get user
                scope['user'] = await sync_to_async(backend.get_user)(token)
            except (InvalidToken, TokenError) as e:
                pass

        return await super().__call__(scope, receive, send)