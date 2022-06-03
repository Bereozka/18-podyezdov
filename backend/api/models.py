from django.db import models


class MaterialModel(models.Model):
    title = models.CharField(max_length=250)
    units = models.CharField(max_length=250)
    price = models.FloatField()
    # TODO


class WorkModel(models.Model):
    title = models.CharField(max_length=250)
    units = models.CharField(max_length=250)
    price = models.FloatField()
    price_staff = models.FloatField()
