#!/bin/sh

python manage.py makemigrations
python manage.py migrate --no-input
python /app/manage.py collectstatic --noinput

gunicorn nynvrio.wsgi:application --bind 0.0.0.0:8000 &

unlink /etc/nginx/sites-enabled/default
nginx -g 'daemon off;'

