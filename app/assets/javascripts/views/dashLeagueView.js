var app = app || {};

app.DashLeagueView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    var html = $('#dashLeagueView-template').html();
    this.$el.html(html);
  }
});
