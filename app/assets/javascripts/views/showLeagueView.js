var app = app|| {};

app.ShowLeagueView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('this is the show league view render');

    // Add in some template html here.
    // This should just be a page structure, so we can render in the relvant teams.

    // Fetch the leagues first, then put this in a .done()
    // Then get the collection rendering into another template.
    // Copy this from appView.js
    var that = this;
    app.teams.fetch().done(function() {
      var html = $('#showLeague-template').html();
      that.$el.html(html);
      // debugger;
      that.collection.each(function(team) {
        var teamListView = new app.TeamListView({model: team});
        teamListView.render();
      });

    });

  }
});
