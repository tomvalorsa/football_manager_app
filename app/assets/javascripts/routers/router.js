var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'loginRedirect',
    'leagues/new': 'renderAddLeagueView',
    'leagues/:id': 'renderShowLeagueView',
    'home': 'renderDashHomeView',
    'team': 'renderDashTeamView',
    'league': 'renderDashLeagueView',
    'settings': 'renderSettingsView',
    'settings/team': 'renderTeamSettingsView',
    'settings/user': 'renderUserSettingsView'
  },
  loginRedirect: function() {
    if (app.userTeam) {
      app.router.navigate('home', true);
    } else {
      var appView = new app.AppView({collection: app.leagues});
      appView.render();
    }
  },
  renderAddLeagueView: function() {
    console.log('add league in the app router');
    var addLeagueView = new app.AddLeagueView();
    addLeagueView.render();
  },
  renderShowLeagueView: function() {
    console.log('render show league view');
    // Need this to only get the ones with the right league id (i.e. relevant to this league).
    var showLeagueView = new app.ShowLeagueView({collection: app.teams});
    showLeagueView.render();
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
