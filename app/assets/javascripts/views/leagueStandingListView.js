var app = app || {};

app.LeagueStandingListView = Backbone.View.extend({
  tagName: 'tr',
  render: function() {
    var leagueStandingListViewTemplate = $('#leagueStandingListView-template').html();
    var leagueStandingListViewHTML = _.template(leagueStandingListViewTemplate);

    this.$el.html(leagueStandingListViewHTML(this.model.toJSON()));
    $('#league-standing-list').append(this.$el);
  }
});
