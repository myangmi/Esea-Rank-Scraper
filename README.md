# Esea-Rank-Scraper
Due to ESEA's update to their website this bot no longer works. I am currently trying to figure out a work around. ESEA blocks non-browsers access via cloudflare preventing the scraper from accessing information.

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
