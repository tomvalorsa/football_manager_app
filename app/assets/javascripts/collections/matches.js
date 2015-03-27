var app = app || {};

app.Matches = Backbone.Collection.extend({
  url: '/matches',
  model: app.Match
});
