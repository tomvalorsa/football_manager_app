var app = app || {};

app.Tactics = Backbone.Collection.extend({
  url: '/tactics',
  model: app.Tactic
});
