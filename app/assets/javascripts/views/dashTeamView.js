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



    var that = this;
    // Sets the league name.
    $('#league-name').html(app.userLeague.name);

    app.players.fetch({
      data: {
        team_id: app.userTeam.id
      },
      processData: true
    }).done(function() {

      var dashTeamViewTemplate = $('#dashTeamView-template').html();
      var dashTeamViewHTML = _.template(dashTeamViewTemplate);
      that.$el.html(dashTeamViewHTML(app.userTeam));

      // debugger;
      that.collection.each(function(player) {
        var playerListView = new app.PlayerListView({model: player});
        playerListView.render();
      });

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
