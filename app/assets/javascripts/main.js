var app = app || {};

app.users = new app.Users();
app.leagues = new app.Leagues();
app.teams = new app.Teams();
app.players = new app.Players();
app.tactics = new app.Tactics();
app.matches = new app.Matches();


$(document).ready(function() {

  // Replace <%= erb style %> with {{ Handlebars style }}
  // to prevent a conflict with Rails views.
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  var tactics = app.tactics.fetch();

  // Nicer way to fetch everything together and then start Backbone.history when it's done.
  $.when(tactics).then(function() {
    app.router = new app.Router();
    Backbone.history.start({pushState: false});
  });

  // A clock on the relevant nav item routes to the correct page.
  // Removes the need for loads of similar events by using a css selector.
  $('[id^="dash-"]').click(function(e) {
    e.preventDefault();
    var destination = $(this).attr('id').replace('dash-', '');
    app.router.navigate(destination, true)
  });

  // Sets the current user's team choice upon sign up.
  $('.pick-team').click(function() {
    var that = this;
    $.post('/set-user-team', {
      team_id: that.dataset.teamId
    });
  });

  // Displays the loading animation while a league is being generated.
  $('#submit-league-form').click(function() {
    $('#loading').css('display', 'inline-block');
  });

});
