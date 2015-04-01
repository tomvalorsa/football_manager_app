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

      var $chart = $('#wldChart');
      var ctx = $chart.get(0).getContext('2d');
      var wldLineChart = new Chart(ctx).Bar(data);


      $('#wld-chart').append(wldLineChart);

      $('#home-balance').html(accounting.formatMoney($('#home-balance').html()));
      $('#home-value').html(accounting.formatMoney($('#home-value').html()));


      var rating = app.userTeam.overall_rating;

      $('#star-rating').html(function() {
        if (rating < 20) {
          return '<i class="fa fa-star-half-o"></i>';
        } else if (rating < 30) {
          return '<i class="fa fa-star"></i>';
        } else if (rating < 40) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>';
        } else if (rating < 50) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i>';
        } else if (rating < 60) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>';
        } else if (rating < 70) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
        } else if (rating < 80) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i>';
        } else if (rating < 90) {
          return '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
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
