var app = app || {};

app.Leagues = Backbone.Collection.extend({
  url: '/leagues',
  model: app.League
});
