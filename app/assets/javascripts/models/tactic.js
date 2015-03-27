var app = app || {};

app.Tactic = Backbone.Model.extend({
  urlRoot: '/tactics',
  defaults: {
    team_id: null,
    formation: '4-4-2',
    tempo: 'balanced',
    playing_style: 'balanced',
    passing: 'balanced',
    tackling: 'balanced'
  }
});
