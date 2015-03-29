var app = app || {};

app.DashTeamView = Backbone.View.extend({
  el: '#main',
  events: {
    'change #passing': 'updatePassing',
    'change #tackling': 'updateTackling',
    'change #tempo': 'updateTempo',
    'change #formation': 'updateFormation'
  },
  render: function() {
    this.$el.empty();
    console.log('rendering the dash team view');

    var html = $('#dashTeamView-template').html();
    this.$el.html(html);
  },
  updatePassing: function() {
    console.log($('#passing').val());
    // This needs to update the team's tactic model.
    // It also needs to set the selected option's 'selected' attr to 'selected'.
  },
  updateTackling: function() {
    console.log($('#tackling').val());
    // This needs to update the team's tactic model.
    // It also needs to set the selected option's 'selected' attr to 'selected'.
  },
  updateTempo: function() {
    console.log($('#tempo').val());
    // This needs to update the team's tactic model.
    // It also needs to set the selected option's 'selected' attr to 'selected'.
  },
  updateFormation: function() {
    console.log($('#formation').val());
    // This needs to update the team's tactic model.
    // It also needs to set the selected option's 'selected' attr to 'selected'.
  }
});
