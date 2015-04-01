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

      // sortList specifies, in preference order, the column (zero-indexed) and then 0 = ascending or 1 = descending for values.
      $("#league-standings").tablesorter({
        sortList: [[9,1],[8,1],[6,1],[1,0]]
      });

      // Temporary solution for filling the league position column.
      // N.B. This doesn't have info from the model, the models themselves still need to have their league_position calculated somehow.
      _.each($('.league-position'), function(td, i) {
        td.innerHTML = (i + 1);
      })
    });


  }
});
