var app = app || {};

app.UserSettingsView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #user-submit': 'updateUser'
  }
  render: function() {
    this.$el.empty();
    var html = $('#userSettingsView-template').html();
    this.$el.html(html);
  },
  updateUser: function() {
    var profileURL = $('#profile-image').val();

    // Updating here relies on passing in the right model to this view...I think?
  }
});
