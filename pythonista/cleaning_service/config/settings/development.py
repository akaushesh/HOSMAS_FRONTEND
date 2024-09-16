from .base import *


# Logging errors to console

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'DEBUG',
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
        'cleaning_request': {
            'handlers': ['console'],
            'level': 'DEBUG',
        },
    },
}
