from django.conf.urls import url
#from djangoIntegrationPart import searchBarTest 
from . import views
from django.urls import path

app_name = 'searchBarTest'
urlpatterns = [
    path('search/', views.search),
]