#!/bin/sh

# ENV: DEVELOPMENT
echo "[Backend] Running in development mode..."

python /app/manage.py makemigrations
python /app/manage.py migrate --no-input
python /app/manage.py loaddata /scripts/initialdata.20241009.json
python /app/manage.py collectstatic --noinput
python /app/manage.py runserver 0.0.0.0:8000