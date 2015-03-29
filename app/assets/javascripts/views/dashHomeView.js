var app = app || {};

app.DashHomeView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('This is where the main dashboard should go');

    var html = $('#dashHomeView-template').html();
    this.$el.html(html);

    // This does the job but it's shitty. Need to somehow feed the user's team and the league it belongs to
    // into this view. Would make stuff a lot nicer. Even better would be to feed the current user's team and league
    // into a variable. That way it could be re-used and kept the same for every user.
    // That way a simple check at the start could be run to check if the user has a team or not. If they don't then
    // take them to the league screen, if they do then send them straight to dashboard#home.
    app.currentUser.team = $.get('/info/current-user-team').done(function() {
      $('#user-team-name').html(app.currentUser.team.responseJSON.name);
    });



  }
});
