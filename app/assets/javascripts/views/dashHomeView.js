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

      var wldData = [
        {
          value: dataPoints[2],
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Losses"
        },
        {
          value: dataPoints[0],
          color: "#66bb6a",
          highlight: "#a5d6a7",
          label: "Wins"
        },
        {
          value: dataPoints[1],
          color: "#ffd54f",
          highlight: "#ffe082",
          label: "Draws"
        }
      ];

      var $wldChart = $('#wldChart');
      var wldCtx = $wldChart.get(0).getContext('2d');
      var wldLineChart = new Chart(wldCtx).Doughnut(wldData);

      $('#wld-chart').append(wldLineChart);

      var financeData = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [app.userTeam.total_value, app.userTeam.total_value, app.userTeam.total_value]
          }
        ]
      };

      var $financeChart = $('#financeChart');
      var financeCtx = $financeChart.get(0).getContext('2d');
      var financeChart = new Chart(financeCtx).Line(financeData);

      $('#home-balance').html(accounting.formatMoney($('#home-balance').html()));
      $('#home-value').html(accounting.formatMoney($('#home-value').html()));


      var rating = app.userTeam.overall_rating;

      $('#star-rating').html(function() {
        if (rating < 20) {
          return '<i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 30) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 40) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 50) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 60) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 70) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 80) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 90) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>';
        } else if (rating < 100) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>';
        } else if (rating === 100) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
        }
      });

      // Finds the current user's team's form rating and sets it as a percentage for the green fill div.
      $('#form-bar-fill').attr('style', function() {
        var form = app.userTeam.form_rating
        return "background-color: #66bb6a; border-radius: 15px; height: 100%; padding: 0; width: " + form + "%;"
      })
    });
  }
});
