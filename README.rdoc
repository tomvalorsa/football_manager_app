# Online Football Manager

Disclaimer: This is a non-commercial project that I created to get a better feel for Backbone.js. No copyright infringement was intended.

##Info:

This app is a football management simulation game where users can choose a team to manage and set them up tactically for matches against other users. The users' tactics, among other things, are evaluated in a daily match (rake task) where two teams are matched up and a winner is decided. This then updates stats within the database which in turn updates statistical info on the site.

##Technologies used:
This app has a Ruby on Rails back-end with the majority of the front-end being made up of Backbone.js.

- Ruby
- Rails
- jQuery
- Underscore.js
- Backbone.js
- Chart.js
- Accounting.js (for prettified monetary amounts)
- Tablesorter.js (for league table)
- Postgres
- RSpec

**This app can be accessed at (http://online-football-manager.herokuapp.com).**

##Known Bugs:

There are a few bugs that affect the performance of the site that are largely down to conflicts between Backbone and Rails. The most prominent of these is during the sign up process. When a user signs up and chooses a team they are redirected to the dashbord. The nav bar at the top is absent as it is displayed on the evaluation of a conditional implemented in Rails. @current\_user.team checks for the presence of current user's team (i.e. if the user has signed up and chosen a team to play with) but as the sign up process is done in Backbone the page needs to be refreshed for @current\_user to 'know' that it has a team. As a result the nav bar is only displayed upon a refresh. This is not a problem for the sign in process if the user already has a team as sign in is handled by Rails and refreshes page while routing you to the dashboard. Due to time constraints I was unable to rectify this but it will be fixed in future.

##Acknowledgements

This project would not have been possible without the help of my class mates at GA, our instructor, Joel Turnbull, and our TA, the real Jack Jeffress. Learning new techniques and fixing bugs is easier when you have more people looking at your code and helping you find improvements. Thank you all for your help.
