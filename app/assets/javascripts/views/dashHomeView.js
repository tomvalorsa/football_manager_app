var app = app || {};

app.DashHomeView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('This is where the main dashboard should go');

    var dashHomeViewTemplate = $('#dashHomeView-template').html();
    var dashHomeViewHTML = _.template(dashHomeViewTemplate);
    this.$el.html(dashHomeViewHTML(app.userTeam));

    // Will need to make an ajax request to a certain path here.
    // That path needs to contain the info on the top scorers and assists etc.


    // Plug in some proper data here.
    // Make an ajax request to a hidden page (make one up) which contains the current user's team's match array.
    // Get these and use as data points for the graph below.

    var data = {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    var $chart = $('#myChart');
    var ctx = $chart.get(0).getContext('2d');
    var financesLineChart = new Chart(ctx).Line(data);

    $('#finance-chart').append(financesLineChart);
  }
});
