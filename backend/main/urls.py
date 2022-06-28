from django.urls import path

# locale imports
from .views import MainView

urlpatterns = [
    path('', MainView.as_view(), name='main'),
]
