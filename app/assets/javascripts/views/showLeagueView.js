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
    var leagueModel = app.leagues.fetch({
      data: {
        id: app.currentLeague
      },
      processData: true
    });

    app.teams.fetch({
      data: {
        league_id: app.currentLeague
      },
      processData: true
    }).done(function() {
      // Need to somehow pass in the right league here.
      var html = $('#showLeague-template').html();
      var showLeagueViewHTML = _.template(html);
      debugger;
      that.$el.html(showLeagueViewHTML(leagueModel.responseJSON));
      // debugger;
      // Need to limit this to only the teams with the right league id.
      that.collection.each(function(team) {
        var teamListView = new app.TeamListView({model: team});
        teamListView.render();
      });

    });

  }
});
