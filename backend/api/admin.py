from django.contrib import admin

# locale imports
from .models import (
    WorkModel,
    MaterialModel,
    WorksMaterialsModel,
)

admin.site.register(WorkModel)
admin.site.register(MaterialModel)
admin.site.register(WorksMaterialsModel)
