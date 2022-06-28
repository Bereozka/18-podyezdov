python -m pip install --upgrade pip
pip install -r requirements.txt

python manage.py makemigrations api
python manage.py migrate

python manage.py loaddata materials.json works.json worksmaterials.json users.json

gunicorn --bind :80 config.wsgi:application
