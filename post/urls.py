from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path(r'^gallery/', views.gallery,  name='gallery'),
    path('rus/', views.rus,  name='rus'),
    path('eng/', views.eng,  name='eng'),
]