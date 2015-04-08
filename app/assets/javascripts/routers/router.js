var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    'home': 'renderDashHomeView',
    'team': 'renderDashTeamView',
    'league': 'renderDashLeagueView',
    'settings': 'renderSettingsView',
    'settings/team': 'renderTeamSettingsView',
    'settings/user': 'renderUserSettingsView'
  },
  renderDashHomeView: function() {
    var dashHomeView = new app.DashHomeView();
    dashHomeView.render();
  },
  renderDashTeamView: function() {
    var dashTeamView = new app.DashTeamView({collection: app.players});
    dashTeamView.render();
  },
  renderDashLeagueView: function() {
    var dashLeagueView = new app.DashLeagueView({collection: app.teams});
    dashLeagueView.render();
  },
  renderSettingsView: function() {
    var settingsView = new app.SettingsView();
    settingsView.render();
  },
  renderTeamSettingsView: function() {
    var teamSettingsView = new app.TeamSettingsView();
    teamSettingsView.render();
  },
  renderUserSettingsView: function() {
    var userSettingsView = new app.UserSettingsView();
    userSettingsView.render();
  }
});
