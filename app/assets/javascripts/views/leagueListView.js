var app = app || {};

app.LeagueListView = Backbone.View.extend({
  tagName: 'div class="league"',
  events: {
    'click': 'showLeague'
  },
  render: function() {
    var leagueListViewTemplate = $('#leagueListView-template').html();
    var leagueListViewHTML = _.template(leagueListViewTemplate);

    // Set the content of this view's element to be the template for this model.
    this.$el.html(leagueListViewHTML(this.model.toJSON()));

    // Append this view's element to the #posts ul on the page.
    $('#leagues').append(this.$el);
  },
  showLeague: function() {
    console.log('show league view to render');
    app.currentLeague = this.model.get('id');
    app.router.navigate('leagues/' + app.currentLeague, true);
  }
});
