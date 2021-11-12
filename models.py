from django.db import models

# Create your models here.
# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

class Roblox(models.Model):
    id = models.IntegerField(blank=True, primary_key = True)
    name = models.TextField(blank=True, null=True)
    universeid = models.TextField(blank=True, null=True)
    placeid = models.TextField(blank=True, null=True)
    link = models.TextField(blank=True, null=True)
    genre = models.TextField(blank=True, null=True)
    allowedgeargenres = models.TextField(blank=True, null=True)
    isgenreenforced = models.BooleanField(blank=True, null=True)
    isallgenre = models.BooleanField(blank=True, null=True)
    playing = models.IntegerField(blank=True, null=True)
    visits = models.TextField(blank=True, null=True)
    favoritedcount = models.IntegerField(blank=True, null=True)
    gamerating = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return self.name
    class Meta:
        managed = False
        db_table = 'roblox'