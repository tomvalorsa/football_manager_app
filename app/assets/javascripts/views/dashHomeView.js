var app = app || {};

app.DashHomeView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.empty();

    var dashHomeViewTemplate = $('#dashHomeView-template').html(),
        dashHomeViewHTML = _.template(dashHomeViewTemplate);
    this.$el.html(dashHomeViewHTML(app.userTeam));

    $('#home-balance').html(accounting.formatMoney($('#home-balance').html()));
    $('#home-value').html(accounting.formatMoney($('#home-value').html()));

    this.printMatchInfo();
    this.printStarRating();
    this.fillFormBar();
    this.displayWLDChart();
  },
  displayWLDChart: function() {
    var dataPoints = [];

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

      var $wldChart = $('#wldChart'),
          wldCtx = $wldChart.get(0).getContext('2d'),
          wldLineChart = new Chart(wldCtx).Doughnut(wldData);

      $('#wld-chart').append(wldLineChart);
    });
  },
  printMatchInfo: function() {
    $.get('/user-match-data', function(result) {
      // Gets the last 5 results from the user's team's match array.
      var recentMatches = result.slice(Math.max(result.length - 5, 0));

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

      // Render list of matches played.
      _.each(result, function(match) {
        var matchListView = new app.MatchListView({model: match});
        matchListView.render();
      });
    });
  },
  printStarRating: function() {
    var customFloor = function(value, roundTo) {
      return Math.floor(value / roundTo) * roundTo;
    }

    // Round rating down to the nearest multiple of 10.
    var rating = customFloor(app.userTeam.overall_rating, 10);

    $('#star-rating').html(function() {
      var result = '',
          star = '<i class="fa fa-star"></i>',
          halfStar = '<i class="fa fa-star-half-o"></i>',
          emptyStar = '<i class="fa fa-star-o"></i>';

      while (rating > 0) {
        if (rating - 20 >= 0) {
          rating = rating - 20;
          result += star + ' ';
        } else if (rating - 10 >= 0) {
          rating = rating - 10;
          result += halfStar;
        }
      }

      // Pad the ratings with empty stars.
      while (result.split('</i>').length != 6) {
        result += ' ' + emptyStar;
      }

      return result;
    });
  },
  fillFormBar: function() {
    $('#form-bar-fill').attr('style', function() {
      var form = app.userTeam.form_rating;
      return "background-color: #66bb6a; border-radius: 15px; height: 100%; padding: 0; width: " + form + "%;"
    });
  }
});
