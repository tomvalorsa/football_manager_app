var app = app || {};

app.League = Backbone.Model.extend({
  urlRoot: '/leagues',
  defaults: {
    name: '',
    nation: '',
    size: 4,
    emblem: '' // Can set a default pic here later.
  }
});
