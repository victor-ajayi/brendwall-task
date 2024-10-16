from django.urls import include, path
from rest_framework.routers import DefaultRouter

from product.views import DeleteAllView, ProductViewSet

product_router = DefaultRouter(trailing_slash=False)
product_router.register("products", ProductViewSet, basename="products")

urlpatterns = [
    path("products/delete", DeleteAllView.as_view(), name="delete-all"),
    path("", include(product_router.urls)),
]
