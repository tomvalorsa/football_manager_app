var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'leagues/new': 'renderAddLeagueView',
    'leagues/:id': 'renderShowLeagueView'
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
    var showLeagueView = new app.ShowLeagueView({collection: app.teams});
    showLeagueView.render();
  }
});
