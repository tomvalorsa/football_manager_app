var app = app || {};

app.Player = Backbone.Model.extend({
  urlRoot: '/players',
  defaults: {
    team_id: null,
    first_name: '',
    last_name: '',
    age: 0,
    nationality: '',
    attack_rating: 0,
    defence_rating: 0,
    value: 0,
    position: '',
    goals: 0,
    assists: 0,
    yellow_cards: 0,
    red_cards: 0,
    mom_count: 0,
    injured: false
  }
});
