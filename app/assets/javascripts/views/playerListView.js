var app = app || {};

app.PlayerListView = Backbone.View.extend({
  el: '#playerList',
  render: function() {
    var playerListViewTemplate = $('#playerListView-template').html();
    var playerListViewHTML = _.template(playerListViewTemplate);
    debugger;
    this.$el.html(playerListViewHTML(this.model));

    $('#player-list tbody').append(this.$el);
  }
});
