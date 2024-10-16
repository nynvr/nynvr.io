#!/bin/sh

# ENV: PRODUCTION
echo "[Backend] Running in production mode..."

python /app/manage.py makemigrations
python /app/manage.py migrate --no-input
python /app/manage.py loaddata /scripts/initialdata.20241009.json
python /app/manage.py collectstatic --noinput
gunicorn nynvrio.wsgi:application --bind 0.0.0.0:8000 &

unlink /etc/nginx/sites-enabled/default
nginx -g 'daemon off;'