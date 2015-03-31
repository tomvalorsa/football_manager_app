var app = app || {};

app.PlayerListView = Backbone.View.extend({
  tagName: 'tr',
  render: function() {
    console.log('player list view');
    var playerListViewTemplate = $('#playerListView-template').html();
    var playerListViewHTML = _.template(playerListViewTemplate);

    this.$el.html(playerListViewHTML(this.model.toJSON()));

    // This adds a class to all of the <tr>s, need to get this going for all of the monetary values.
    // Give the right <td> an ID and use the money prettifier thing.
    this.$el.addClass('suuuuuup');


    $('#player-list').append(this.$el);
  }
});
