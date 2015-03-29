var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'leagues/new': 'renderAddLeagueView',
    'leagues/:id': 'renderShowLeagueView',
    'home': 'renderMainDashboardView'
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
  renderMainDashboardView: function() {
    var mainDashboardView = new app.MainDashboardView();
    mainDashboardView.render();
  }
});
