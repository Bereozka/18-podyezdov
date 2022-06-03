python manage.py makemigrations
python manage.py migrate

gunicorn --bind :80 config.wsgi:application
