var app = app || {};

app.LeagueListView = Backbone.View.extend({
  // We want a <div> and that's the default, so no need to specify tag name.
  render: function() {
    var leagueListViewTemplate = $('#leagueListView-template').html();
    var leagueListViewHTML = _.template(leagueListViewTemplate);

    // Set the content of this view's element to be the template for this model.
    this.$el.html(leagueListViewHTML(this.model.toJSON()));

    // Append this view's element to the #posts ul on the page.
    $('#leagues').append(this.$el);
  }
});
