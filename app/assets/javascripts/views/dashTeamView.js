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

    var dashTeamViewTemplate = $('#dashTeamView-template').html();
    var dashTeamViewHTML = _.template(dashTeamViewTemplate);
    this.$el.html(dashTeamViewHTML(app.userTeam));

    // Sets the league name.
    $('#league-name').html(app.userLeague.name);

    app.players.fetch({
      data: {
        team_id: app.userTeam.id
      },
      processData: true
    }).done(function(result) {
      // debugger;
      for (var i = 0; i < result.length; i++){
        var playerListView = new app.PlayerListView({model: result[i]});
        playerListView.render();
      }
    });




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
