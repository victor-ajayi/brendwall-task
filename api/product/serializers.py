from rest_framework import serializers

from product.models import Product


class AllProductsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    price = serializers.DecimalField(max_digits=10, decimal_places=2, min_value=0)

    class Meta:
        model = Product
        fields = "__all__"
