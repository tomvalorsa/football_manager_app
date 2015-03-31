var app = app || {};

app.LeagueStandingListView = Backbone.View.extend({
  tagName: 'tr',
  render: function() {
    // Will need to order the collection by a certain criteria (e.g. pts - add this to teams column?) so that they come through in ranking order to display in the table.
    var leagueStandingListViewTemplate = $('#leagueStandingListView-template').html();
    var leagueStandingListViewHTML = _.template(leagueStandingListViewTemplate);

    this.$el.html(leagueStandingListViewHTML(this.model.toJSON()));
    $('#league-standing-list').append(this.$el);

  }
});
