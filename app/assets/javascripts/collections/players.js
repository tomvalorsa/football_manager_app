var app = app || {};

app.Players = Backbone.Collection.extend({
  url: '/players',
  model: app.Player
});
