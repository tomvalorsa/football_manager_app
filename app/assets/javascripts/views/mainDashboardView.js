var app = app || {};

app.MainDashboardView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('This is where the main dashboard should go');
  }
});
