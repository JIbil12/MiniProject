from django.contrib import admin
from django.urls import path,include
from .views import fac_login,fac_data_view

urlpatterns = [
    path('fac_login/', fac_login, name="user-fac_login"),
    path('fac_data_get/', fac_data_view, name="fac_data_view"),
]