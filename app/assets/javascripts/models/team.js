var app = app || {};

app.Team = Backbone.Model.extend({
  urlRoot: '/teams',
  defaults: {
    league_id: null,
    user_id: null,
    name: '',
    overall_rating: 0,
    league_position: null,
    total_value: 0,
    bank_balance: 0,
    form_rating: 50,
    emblem: '' // Can set a default pic here later.
  }
});
