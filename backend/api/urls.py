from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

urlpatterns = router.urls + [
    path('health/', views.health_check, name='health'),
]


