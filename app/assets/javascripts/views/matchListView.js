var app = app || {};

app.MatchListView = Backbone.View.extend({
  tagName: 'h4',
  render: function() {
    this.$el.empty();
    var matchListViewTemplate = $('#matchListView-template').html();
    var matchListViewHTML = _.template(matchListViewTemplate);

    this.$el.html(matchListViewHTML(this.model));

    $('#matches-played').append(this.$el);
  }
});
