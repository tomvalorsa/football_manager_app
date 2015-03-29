var app = app|| {};

app.ShowLeagueView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('this is the show league view render');
  }
});
