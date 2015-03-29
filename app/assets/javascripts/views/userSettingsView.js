var app = app || {};

app.UserSettingsView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    var html = $('#userSettingsView-template').html();
    this.$el.html(html);
  }
});
