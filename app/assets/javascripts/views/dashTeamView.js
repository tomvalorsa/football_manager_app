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

    app.players.fetch({
      data: {
        team_id: app.userTeam.id
      },
      processData: true
    }).done(function() {

      var dashTeamViewTemplate = $('#dashTeamView-template').html();
      var dashTeamViewHTML = _.template(dashTeamViewTemplate);
      that.$el.html(dashTeamViewHTML(app.userTeam));
      // Sets the league name. Has to go after the template has been rendered.
      $('#league-name').html(app.userLeague.name);

      that.collection.each(function(player) {
        var playerListView = new app.PlayerListView({model: player});
        playerListView.render();
      });
    });
  },
  updatePassing: function() {
    var passing = $('#passing').val();
    var tactic = app.tactics.get(app.userTactic.id);

    tactic.set({'passing': passing});
    tactic.save();
  },
  updateTackling: function() {
    var tackling = $('#tackling').val();
    var tactic = app.tactics.get(app.userTactic.id);

    tactic.set({'tackling': tackling});
    tactic.save();
  },
  updateTempo: function() {
    var tempo = $('#tempo').val();
    var tactic = app.tactics.get(app.userTactic.id);

    tactic.set({'tempo': tempo});
    tactic.save();
  },
  updateFormation: function() {
    var formation = $('#formation').val();
    var tactic = app.tactics.get(app.userTactic.id);

    tactic.set({'formation': formation});
    tactic.save();
  }
});
