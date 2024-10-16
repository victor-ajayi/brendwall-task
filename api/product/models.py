from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=128, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    colour = models.CharField(max_length=128, blank=True, null=True)
    vendor = models.CharField(max_length=128, blank=True, null=True)
