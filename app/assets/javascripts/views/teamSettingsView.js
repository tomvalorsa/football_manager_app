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
    // Fetch the current user's team here.
    // Then populate the fields with the right information.
  },
  updateTeam: function() {
    var teamName = $('#team-name').val();
    var teamEmblem = $('#team-emblem').val();

    // Updating here relies on passing in the right model to this view...I think?
    debugger;
  }
});
