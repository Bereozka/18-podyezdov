from django.db import models


class WorkModel(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name="Название",
    )
    units = models.CharField(
        max_length=250,
        verbose_name="Единицы измерения",
    )
    price = models.FloatField(
        verbose_name="Цена",
    )
    price_staff = models.FloatField(
        verbose_name="Цена для сотрудников",
    )

    class Meta:
        verbose_name = "Работа"
        verbose_name_plural = "Работы"
        ordering = ['id']


class MaterialModel(models.Model):
    title = models.CharField(
        max_length=250,
        verbose_name="Название",
    )
    units = models.CharField(
        max_length=250,
        verbose_name="Единицы измерения",
    )
    price = models.FloatField(
        verbose_name="Цена",
    )
    link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name="Ссылка на страницу с материалом ( не обязательно )",
    )

    class Meta:
        verbose_name = "Материал"
        verbose_name_plural = "Материалы"
        ordering = ['id']


class WorksMaterialsModel(models.Model):
    work = models.ForeignKey(
        WorkModel,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="worksmaterials",
        verbose_name="Работа",
    )
    material = models.ForeignKey(
        MaterialModel,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="worksmaterials",
        verbose_name="Материал",
    )
    count = models.FloatField(
        default=1,
        verbose_name="Количество",
    )

    class Meta:
        verbose_name = "Работы и Материалы"
        verbose_name_plural = "Работы и Материалы"
        ordering = ['id']
