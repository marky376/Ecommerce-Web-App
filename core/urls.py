from django.urls import path, include
from rest_framework import routers
from .views import (
    UserViewSet, VendorViewSet, CartItemViewSet, ProductViewSet,
    PaymentViewSet, RefundPolicyViewSet, ReviewViewSet,
    WishListViewSet, TaxViewSet, NotificationViewSet, FAQSViewSet,
    ShippingViewSet, SubscriptionViewSet, AnalyticsViewSet, OrderItemViewSet,
    OrderViewSet, CartViewSet, CouponViewSet, ConfigurationViewSet,
    ContactViewSet, BlogViewSet, CategoryViewSet
)

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)
router.register(r'cart', CartViewSet)
router.register(r'cart-item', CartItemViewSet)
router.register(r'shippings', ShippingViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'Coupons', CouponViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'wishlist', WishListViewSet)
router.register(r'notifications', NotificationViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'subscriptions', SubscriptionViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'faqs', FAQSViewSet)
router.register(r'analytics', AnalyticsViewSet)
router.register(r'configuration', ConfigurationViewSet)
router.register(r'taxes', TaxViewSet)
router.register(r'vendors', VendorViewSet)
router.register(r'refunds', RefundPolicyViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]
