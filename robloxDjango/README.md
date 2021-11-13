* install django, djangorest_framework, psycopg with "pip install"

#Setting up search bar example#
* Setup a django project with terminal command "django-admin startproject robloxDjango"
* cd into "robloxDjango"
* Setup a django app within directory with terminal command "python manage.py startapp robloxData"
* Copy and paste github code for respective files 

* Download pgAdmin4
	- Using windows installer or your respective systems installer is preferred
	- Setup arbitrary master password (remember it though)

* Download postgresql
	- Same password should be fine (Can be changed in the future, hopefully)
	- Maintain same port

* Setting up with pgAdmin4
	- Restart pgAdmin4
	- Enter in password for both
	- Follow yt video: https://www.youtube.com/watch?v=Ikd2xSb00UI
		- To create the table, use the create_table text file provided

* Running Code and viewing result
	- in terminal, while in the project folder, run "python manage.py makemigrations", then "python manage.py migrate", then "python manage.py inspectdb > models.py"
	- Finally, run "python manage.py runserver" and follow link to view example.
