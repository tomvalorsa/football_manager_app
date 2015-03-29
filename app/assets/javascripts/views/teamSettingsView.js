var app = app || {};

app.TeamSettingsView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    var html = $('#teamSettingsView-template').html();
    this.$el.html(html);
  }
});
