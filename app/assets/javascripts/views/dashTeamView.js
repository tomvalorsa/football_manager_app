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

    // Need to get this to work in the render function as well, so that when a user goes to their dashboard it shows the current team.
    $('#pitch-graphic').attr('src', function() {
        switch (tactic.toJSON().formation) {
          case "4-4-2":
            return "http://i.imgur.com/cq6W5KY.png"
            break;
          case "4-3-3":
            return "http://i.imgur.com/sPVh0xx.png"
            break;
          case "4-5-1":
            return "http://i.imgur.com/ua5O1on.png"
            break;
          case "4-1-2-1-2":
            return "http://i.imgur.com/RQa21gm.png"
            break;
          case "4-1-4-1":
            return "http://i.imgur.com/s2ToTgJ.png"
            break;
          default:
            return "http://i.imgur.com/cq6W5KY.png"
        }
      });

    tactic.save();
  }
});
