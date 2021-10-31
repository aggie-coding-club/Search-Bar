from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from . import views
from .models import Game
from django.template import loader
# Create your views here.

#@api_view(['GET'])
def search(request):
    title = Game.objects.all()
    context = {'title': title}
    template = 'searchBarTest/test.html'
    return render(request, 'searchBarTest/test.html', context)
    #return HttpResponse(request, 'searchBarTest/test.html')

def create(self, request): #, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    headers = self.get_success_headers(serializer.data)
    return Response(serializer.data) #, status=status.HTTP_201_CREATED, headers=headers)

