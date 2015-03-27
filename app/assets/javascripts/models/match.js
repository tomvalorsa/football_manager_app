var app = app || {};

app.Match = Backbone.Model.extend({
  urlRoot: '/matches',
  defaults: {
    league_id: null,
    home_team: '',
    away_team: '',
    home_goals: 0,
    away_goals: 0,
    home_result: '',
    away_result: '',
    home_fouls: 0,
    away_fouls: 0,
    home_possession: 0,
    away_possession: 0,
    man_of_match: ''
  }
});
