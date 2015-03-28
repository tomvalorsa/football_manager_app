var app = app || {};

app.AddLeagueView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #submit-league-form': 'createLeague'
  },
  render: function() {
    console.log('now inside of the addLeagueView render');
    this.$el.empty();
    var html = $('#addLeagueView-template').html();
    this.$el.html(html);
  },
  createLeague: function(e) {
    e.preventDefault();
    var name = $('#league-name').val();
    var emblem = $('#league-emblem').val();
    var nation = $('#league-nation').val();
    var size = $('#league-size').val();

    var league = new app.League({
      name: name,
      emblem: emblem,
      nation: nation,
      size: size
    });

    league.save().done(function() {
      console.log('league created');
      // When this is done it should create the teams
        // this should create a tactic
        // and the players for that team
      // this should then create the match objects
    });
  }
});
