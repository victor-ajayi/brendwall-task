from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from product.models import Product
from product.serializers import AllProductsSerializer


class ProductViewSet(ModelViewSet):
    serializer_class = AllProductsSerializer
    http_method_names = ["get", "post", "delete"]

    def get_queryset(self):
        return Product.objects.all()


class DeleteAllView(APIView):
    http_method_names = ["post"]

    def post(self, request):
        Product.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
