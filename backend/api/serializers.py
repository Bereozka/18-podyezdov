from rest_framework import serializers

# locale imports
from .models import (
    WorkModel,
    MaterialModel,
    WorksMaterialsModel,
)


class WorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkModel
        fields = (
            "id",
            "title",
            "units",
            "price",
            "price_staff",
            "worksmaterials",
        )


class MaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model = MaterialModel
        fields = ("id", "title", "units", "price", "link", "worksmaterials")


class WorksMaterialsSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorksMaterialsModel
        fields = ("id", "work", "material", "count")
