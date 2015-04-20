var app = app || {};

app.League = Backbone.Model.extend({
  urlRoot: '/leagues',
  defaults: {
    name: 'league_name',
    nation: 'nation_name',
    size: 4,
    emblem: ''
  }
});
