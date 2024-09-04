from .base import *


# Logging errors to a file and console

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'logfile': {
            'level': 'ERROR',
            'class': 'logging.FileHandler',
            'filename': LOGS_ROOT / 'error.log',
        },
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'logfile'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}


# CORS settings
CORS_ALLOW_ALL_ORIGINS = True
