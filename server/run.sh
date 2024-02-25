python manage.py migrate
python manage.py collectstatic --noinput
daphne -e ssl:3740:privateKey=privkey.pem:certKey=cert.pem -b 0.0.0.0 config.asgi:application
