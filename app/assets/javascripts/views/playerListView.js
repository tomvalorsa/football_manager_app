var app = app || {};

app.PlayerListView = Backbone.View.extend({
  tagName: 'tr',
  render: function() {
    console.log('player list view');
    var playerListViewTemplate = $('#playerListView-template').html();
    var playerListViewHTML = _.template(playerListViewTemplate);

    this.$el.html(playerListViewHTML(this.model.toJSON()));

    $('#player-list').append(this.$el);

  }
});
