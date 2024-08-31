from django.contrib import admin
from .models import (
    User, Vendor, Category, Product, Order, OrderItem,
    Shipping, Payment, Cart, CartItem, Coupon, Configuration,
    Contact, WishList, Tax, Subscription, RefundPolicy, Review,
    Blog, Notification, FAQS, Analytics
)

admin.site.register(User)
admin.site.register(Product)
admin.site.register(Vendor)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Shipping)
admin.site.register(Payment)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Coupon)
admin.site.register(Configuration)
admin.site.register(Contact)
admin.site.register(WishList)
admin.site.register(Tax)
admin.site.register(Subscription)
admin.site.register(RefundPolicy)
admin.site.register(Blog)
admin.site.register(Notification)
admin.site.register(FAQS)
admin.site.register(Analytics)
admin.site.register(Review)
