from .base import *


# Logging errors to console

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': True,
        },
        'celery': {
            'handlers': ['console'],
            'level': 'INFO',
        },
    },
}


# CORS settings
CORS_ALLOWED_ORIGIN_REGEXES = [ r"^http\:\/\/localhost\:[0-9]+" ]
