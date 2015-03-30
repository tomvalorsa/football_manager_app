var app = app || {};

app.TeamSettingsView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #team-submit': 'updateTeam'
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
    team.save().done(function() {
      app.router.navigate('settings', true);
    });
  }
});
