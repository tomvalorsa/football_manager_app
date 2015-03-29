// This is currently being set to the create/choose a league screen.
// Maybe rename this to setupView.

var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #add-league': 'navToAddLeague'
  },
  render: function() {
    this.$el.empty();
    console.log('Rendering AppView...');
    // Think of a better name than that.
    var that = this;
    app.leagues.fetch().done(function(){
      var html = $('#pickLeague-template').html();
      that.$el.html(html);

      // Renders all of the individual leagues into the template above.
      that.collection.each(function(league) {
        var leagueListView = new app.LeagueListView({model: league});
        leagueListView.render();
      });
    });

    // var leagueListView = new app.LeagueListView({collection: app.leagues});
    // leagueListView.render();
  },
  navToAddLeague: function() {
    console.log('running the league creation wizard');
    // Needs to render a different view here.
    // View should contain a form and send a post to leagues#create.
    app.router.navigate('leagues/new', true);
  }
});
