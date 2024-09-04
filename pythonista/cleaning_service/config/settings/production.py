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
CORS_ALLOWED_ORIGINS = config('CORS_ALLOWED_ORIGINS', cast = lambda v: [s.strip() for s in v.split(',')])
