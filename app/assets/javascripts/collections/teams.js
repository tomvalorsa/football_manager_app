var app = app || {};

app.Teams = Backbone.Collection.extend({
  url: '/teams',
  model: app.Team
});
