var app = app || {};

app.DashHomeView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();

    var dashHomeViewTemplate = $('#dashHomeView-template').html();
    var dashHomeViewHTML = _.template(dashHomeViewTemplate);
    this.$el.html(dashHomeViewHTML(app.userTeam));

    var dataPoints = [];

    $.get('/user-match-data', function(result) {
      // 'result' here is an array of match objects that belong to the user's team,
      // i.e. matches they have played.

      // Gets the last 5 results from the user's team's match array.
      var recentMatches = result.slice(Math.max(result.length - 5, 0));

      // Use recentMatches here instead of a direct slice to make the check for the last array item dynamic.
      // Needs to be cleaned up, this is kinda ugly. Works for now.
      _.each(recentMatches, function(match, i) {
        if(match.home_team_id === app.userTeam.id) {
          if(match === _.last(recentMatches)) {
            $('#recent-results').append(match.home_result);
          } else {
            $('#recent-results').append(match.home_result + ' - ');
          }
        } else if(match.away_team_id === app.userTeam.id) {
          if(match === _.last(recentMatches)) {
            $('#recent-results').append(match.away_result);
          } else {
            $('#recent-results').append(match.away_result + ' - ');
          }
        }
      });

      // Throw up the all matches with teams and scores to the dash.
      _.each(result, function(match) {
        var matchListView = new app.MatchListView({model: match});
        matchListView.render();
      });

    });

    $.get('/current-user-team-stats', function(result) {
      $('#team-emblem').attr('src', result.emblem);
      $('#team-name').html(result.name);
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
