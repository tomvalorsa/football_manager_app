var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function() {
    var appView = new app.AppView();
    appView.render();
  }
});
