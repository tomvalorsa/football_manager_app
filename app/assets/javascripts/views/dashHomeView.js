var app = app || {};

app.DashHomeView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();
    console.log('This is where the main dashboard should go');

    var dashHomeViewTemplate = $('#dashHomeView-template').html();
    var dashHomeViewHTML = _.template(dashHomeViewTemplate);
    this.$el.html(dashHomeViewHTML(app.userTeam));

    var dataPoints = [];

    $.get('/current-user-team-stats', function(result) {
      dataPoints.push(result.win);
      dataPoints.push(result.draw);
      dataPoints.push(result.loss);

    }).done(function() {
      // debugger;
      var data = {
        labels: ["Wins", "Draws", "Losses"],
        datasets: [
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [dataPoints[0], dataPoints[1], dataPoints[2]]
          }
        ]
      };

      var $chart = $('#myChart');
      var ctx = $chart.get(0).getContext('2d');
      var financesLineChart = new Chart(ctx).Bar(data);


      $('#finance-chart').append(financesLineChart);

      debugger;
      $('#home-balance').html(accounting.formatMoney($('#home-balance').html()));
      $('#home-value').html(accounting.formatMoney($('#home-value').html()));
    });
  }
});
