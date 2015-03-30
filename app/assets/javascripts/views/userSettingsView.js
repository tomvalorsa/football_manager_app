var app = app || {};

app.UserSettingsView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #user-submit': 'updateUser',
    'click #user-settings-back': 'navToSettings'
  },
  render: function() {
    this.$el.empty();
    var html = $('#userSettingsView-template').html();
    this.$el.html(html);

    $('#profile-image').val(app.currentUser.profile_image);
  },
  updateUser: function() {
    var profileURL = $('#profile-image').val();

    var user = app.users.get(app.currentUser.id);

    user.set({
      'profile_image': profileURL
    });
    user.save().done(function() {
      app.router.navigate('settings', true);
    });
  },
  navToSettings: function(e) {
    e.preventDefault();
    app.router.navigate('settings', true);
  }
});
