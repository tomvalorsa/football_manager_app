var app = app || {};

app.DashTeamView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('rendering the dash team view');

    var html = $('#dashTeamView-template').html();
    this.$el.html(html);
  }
});
