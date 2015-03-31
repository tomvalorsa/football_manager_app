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

  app.users.fetch();
  app.teams.fetch();
  app.players.fetch();
  app.tactics.fetch();
  app.matches.fetch();

  app.leagues.fetch().done(function() {
    app.router = new app.Router();
    Backbone.history.start({pushState: false});
  });

  $('#dash-home').click(function(e) {
    e.preventDefault();
    app.router.navigate('home', true);
  });

  $('#dash-team').click(function(e) {
    e.preventDefault();
    app.router.navigate('team', true);
  });

  $('#dash-league').click(function(e) {
    e.preventDefault();
    app.router.navigate('league', true);
  });

  $('#dash-transfers').click(function(e) {
    e.preventDefault();
    app.router.navigate('home', true);
  });

  $('#dash-settings').click(function(e) {
    e.preventDefault();
    app.router.navigate('settings', true);
  });

});
