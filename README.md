# Search-Bar-Django-Example

Necessary Installations
* install django, djangorestframework, django-cors-headers, psycopg2 - all with "pip install"
* Install roblox_data.csv file in Data folder
* install pgAdmin4 and postgresql (described later down)

## Setting up search bar example
* Create "robloxDjango" folder to hold all contents in this repository
* Download zip file from github, and extract contents into folder

[How it should look](https://user-images.githubusercontent.com/70815649/141869091-e6613d06-3b01-4b40-acdf-6c8ae9658a4f.png)

* Download pgAdmin4
	- Using windows installer or your respective systems installer is preferred
	- Setup master password: "searchbar"

* Download postgresql
	- Same password should be fine (Can be changed in the future, hopefully)
	- Make sure to remember the password for future logins
	- Maintain same port

* Setting up with pgAdmin4
	- Restart pgAdmin4
	- Enter in password for both
	- Follow yt video: https://www.youtube.com/watch?v=Ikd2xSb00UI
		- To create the table, use the create_table text file provided

* Running Code and viewing result
	- in terminal, while in the project folder, run "python manage.py makemigrations", then "python manage.py migrate", then "python manage.py inspectdb > models.py"
	- Finally, run "python manage.py runserver" and follow link to view example.
