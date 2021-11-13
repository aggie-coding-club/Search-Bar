# Search-Bar-Django-Example

Necessary Installations
* install django, djangorest_framework, psycopg with "pip install"
* install pgAdmin4 and postgresql (described later down)

## Setting up search bar example
* Create "robloxDjango" folder to hold all contents in this repository
* Download zip file from github, and extract contents into folder

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
