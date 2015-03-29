var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'leagues/new': 'renderAddLeagueView',
    'leagues/:id': 'renderShowLeagueView',
    'home': 'renderDashHomeView',
    'team': 'renderDashTeamView',
    'league': 'renderDashLeagueView'
  },
  index: function() {
    var appView = new app.AppView({collection: app.leagues});
    appView.render();
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
    var dashTeamView = new app.DashTeamView();
    dashTeamView.render();
  },
  renderDashLeagueView: function() {
    var dashLeagueView = new app.DashLeagueView();
    dashLeagueView.render();
  }
});
