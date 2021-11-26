# Data-Info

## Aggie-Grades
Two csv files related to this are course_classes and rate_my_professor_data. Only missing data I've seen is in rate_my_professor_data with 4 missing entries for firstName.
Some professors in TAMU have not been added to rate my professor as well, so when implementing Search Bar keep this in mind.

Improvements:
- rate_my_professor csv file can be improved by creating seperate entries for each teacher's class. Instead of having total ratings for the professor, have ratings and data for each of the professor's classes (useful metric that would be helpful along with total data).
- course_classes has sections for all courses from past up till Spring 2020. To get data from 2021-2022, must collect data from https://web-as.tamu.edu/gradereport/.

## Car-Data
Data dealing with cars, missing a ton of data in some fields (site issue). Features and types column in csv file is a little deceptive, doesn't actually list the many features and types. Instead, to simplify these two I just took their respective counts.

## Roblox_Data
Decent amount of metrics added for game info. Unsure whether to add each game's description as well as like-dislike ratio for potential features in search bar.

Nov 26

Added another file containing roblox data, contains the previous stats as well as like, dislike, thumburl, and updated gameRating. This will allow for more potential backend and frontend features.
