var app = app || {};

app.SettingsView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #team-settings-button': 'renderTeamSettings',
    'click #user-settings-button': 'renderUserSettings'
  },
  render: function() {
    this.$el.empty();
    var html = $('#dashSettingsView-template').html();
    this.$el.html(html);
  },
  renderTeamSettings: function() {
    app.router.navigate('settings/team', true);
  },
  renderUserSettings: function() {
    app.router.navigate('settings/user', true);
  }
})
