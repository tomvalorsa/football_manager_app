var app = app || {};

app.TeamListView = Backbone.View.extend({
  tagName: 'div class="team"',
  render: function() {
    var teamListViewTemplate = $('#teamListView-template').html();
    var teamListViewHTML = _.template(teamListViewTemplate);

    this.$el.html(teamListViewHTML(this.model.toJSON()));

    $('#teams').append(this.$el);
  }
});
