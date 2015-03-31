var app = app || {};

app.DashLeagueView = Backbone.View.extend({
  el: '#main',
  events: {
  },
  render: function() {
    this.$el.empty();
    var that = this;

    app.teams.fetch({
      data: {
        league_id: app.userLeague.id,
        user_id: app.currentUser.id
      },
      processData: true
    }).done(function() {
      var html = $('#dashLeagueView-template').html();
      that.$el.html(html);

      $('#league-name').html(app.userLeague.name);

      that.collection.each(function(team) {
        var leagueStandingListView = new app.LeagueStandingListView({model: team});
        leagueStandingListView.render();
      })

      $("#league-standings").tablesorter();
    });

  }
});
