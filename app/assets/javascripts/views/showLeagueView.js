var app = app|| {};

app.ShowLeagueView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #back-to-league-selection': 'navBack'
  },
  render: function() {
    this.$el.empty();
    console.log('this is the show league view render');

    var that = this;
    var leagueModel = app.leagues.get(app.currentLeague);

    app.teams.fetch({
      data: {
        league_id: app.currentLeague
      },
      processData: true
    }).done(function() {
      var showLeagueTemplate = $('#showLeague-template').html();
      var showLeagueViewHTML = _.template(showLeagueTemplate);

      that.$el.html(showLeagueViewHTML(leagueModel.toJSON()));

      that.collection.each(function(team) {
        var teamListView = new app.TeamListView({model: team});
        teamListView.render();
      });
    }).done(function() {
      _.each($('.team-list-bank-balance'), function(p) {
        p.innerHTML = accounting.formatMoney(p.innerHTML);
      })
    });
  },
  navBack: function(e) {
    e.preventDefault();
    app.router.navigate('', true)
  }
});
