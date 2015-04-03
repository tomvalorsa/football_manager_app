var app = app || {};

app.TeamListView = Backbone.View.extend({
  tagName: 'div class="team"',
  events: {
    'click': 'pickTeam'
  },
  render: function() {
    var teamListViewTemplate = $('#teamListView-template').html();
    var teamListViewHTML = _.template(teamListViewTemplate);

    // Need this to only get the ones with the right league id (i.e. relevant to this league).
    // Also need to find the league's id to compare it to.
    this.$el.html(teamListViewHTML(this.model.toJSON()));
    $('#teams').append(this.$el);
  },
  pickTeam: function() {
    // Sets the chosen team's user_id to that of the current user, i.e. assigns team to the user.
    // NEEDS TO ACTUALLY CHECK IF THE RESPONSE IS YES! Currently just checks if it's there so it's always true. Team even gets selected if the user clicks no.
    var teamChoice = confirm('Are you sure?');
    if (teamChoice) {
      this.model.set('user_id', app.currentUser.id);

      // This line is the key to making it go straight to the dashboard without the need for a refresh.
      // app.userTeam only gets the value by itself on a page refresh so we have to set it manually here.
      app.userTeam = this.model.toJSON();

      this.model.save().done(function() {
        // This makes sure the page refreshes when the user has picked a team. Looks a bit sloppy, but currently
        // necessary so the Ruby conditional is triggered to reveal the nav for a logged in user who has a team.
        // Set a timeout/delay on this?
        app.router.navigate('home', true);
      });
    };
  }
});
