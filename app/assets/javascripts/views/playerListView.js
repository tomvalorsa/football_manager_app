var app = app || {};

app.PlayerListView = Backbone.View.extend({
  tagName: 'tr',
  render: function() {
    var playerListViewTemplate = $('#playerListView-template').html();
    var playerListViewHTML = _.template(playerListViewTemplate);

    this.$el.html(playerListViewHTML(this.model.toJSON()));

    $('#player-list').append(this.$el);
  }
});
