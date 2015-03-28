var app = app || {};

app.users = new app.Users();
app.leagues = new app.Leagues();
app.teams = new app.Teams();
app.players = new app.Players();
app.tactics = new app.Tactics();
app.matches = new app.Matches();

$(document).ready(function() {


  // Replace <%= erb style %> with {{ Handlebars style }}
  // to prevent a conflict with Rails views.
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  app.leagues.fetch().done(function() {
    app.router = new app.Router();
    Backbone.history.start({pushState: false});
  });

});
