var app = app || {};

app.TeamSettingsView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #team-submit': 'updateTeam',
    'click #team-settings-back': 'navToSettings'
  },
  render: function() {
    this.$el.empty();
    var html = $('#teamSettingsView-template').html();
    this.$el.html(html);

    // Populate form fields with current values.
    $('#team-name').val(app.userTeam.name);
    $('#team-emblem').val(app.userTeam.emblem);
    // Fetch the current user's team here.
    // Then populate the fields with the right information.
  },
  updateTeam: function() {
    var teamName = $('#team-name').val();
    var teamEmblem = $('#team-emblem').val();

    var team = app.teams.get(app.userTeam.id);

    team.set({
      'name': teamName,
      'emblem': teamEmblem
    });
    team.save().done(function(response) {
      // debugger;
      app.userTeam = response;
      // Sets the user's nav heading to show their new team name with the changed value.
      $('#user-team-header').html(response.name);
      app.router.navigate('settings', true);
    });
  },
  navToSettings: function(e) {
    e.preventDefault();
    app.router.navigate('settings', true);
  }
});
