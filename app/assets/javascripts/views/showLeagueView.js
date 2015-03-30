var app = app|| {};

app.ShowLeagueView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('this is the show league view render');

    // Add in some template html here.
    // This should just be a page structure, so we can render in the relvant teams.

    // Fetch the teams first, then put this in a .done()
    // Then get the collection rendering into another template.
    // Copy this from appView.js
    var that = this;

    // Stores the right league model so we can push it to the template below.
    // FIX THIS.
    var leagueModel = app.leagues.get(app.currentLeague);

    app.teams.fetch({
      data: {
        league_id: app.currentLeague
      },
      processData: true
    }).done(function() {
      var showLeagueTemplate = $('#showLeague-template').html();
      var showLeagueViewHTML = _.template(showLeagueTemplate);
      debugger;
      that.$el.html(showLeagueViewHTML(leagueModel.toJSON()));

      that.collection.each(function(team) {
        var teamListView = new app.TeamListView({model: team});
        teamListView.render();
      });

    });

  }
});
