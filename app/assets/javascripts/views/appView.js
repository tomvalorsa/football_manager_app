// This is currently being set to the create/choose a league screen.
// Maybe rename this to setupView.

var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #add-league': 'leagueCreation'
  },
  render: function() {
    this.$el.empty();
    console.log('Rendering AppView...');
    var html = $('#pickLeague-template').html();
    this.$el.html(html);


    this.collection.each(function(league) {
      var leagueListView = new app.LeagueListView({model: league});
      leagueListView.render();
    });
    // var leagueListView = new app.LeagueListView({collection: app.leagues});
    // leagueListView.render();
  },
  leagueCreation: function() {
    console.log('running the league creation wizard');
    // Needs to render a different view here.
    // View should contain a form and send a post to leagues#create.
    app.router.navigate('leagues/new', true);
  }
});
