from rest_framework import serializers
from searchBarTest.models import Game

class searchBarTestSerializer(serializers.ModelSerialiezer):
    class Meta:
        model = Game
        fields = ('title')