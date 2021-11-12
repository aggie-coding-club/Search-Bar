from django.shortcuts import render
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from . import views
from django.template import loader
from rest_framework import generics
from .models import Roblox
# Create your views here.

def index(request):
    q = request.GET.get("q")
    if q:
       games = Roblox.objects.filter(name__search=q)
    else:
        games = None
    context = {"games":games}
    return render(request, "index.html", context)