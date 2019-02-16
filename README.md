# Esea-Rank-Scraper
Beginning stages of a program that will scrape ESEA for a player's rank using a discord bot to read commands from users.

Future implementation will consist of:

1. rank lookup (Implemented)
2. monthly record lookup (Implemented)
3. player RWS lookup (Implemented)


How to use:

format: !(command) (username)
All commands are lowercase
All usernames are case sensitive

Comands: !rank, !rws, !adr, !record


Known issues: usernames that contain "^" will not work properly. This is due to ESEA's queries not properly working.
