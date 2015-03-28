var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'leagues/new': 'addLeague'
  },
  index: function() {
    var appView = new app.AppView({collection: app.leagues});
    appView.render();
  },
  addLeague: function() {
    console.log('add league in the app router');
    var addLeagueView = new app.AddLeagueView();
    addLeagueView.render();
  }
});
