python manage.py migrate
python manage.py collectstatic --noinput
gunicorn --worker-class gevent --certfile=cert.pem --keyfile=privkey.pem --bind 0.0.0.0:3740 -w 1 config.wsgi:application --preload --timeout 300
