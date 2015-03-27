var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function() {
    var html = // template html
    this.$el.html(html);
  }
});
