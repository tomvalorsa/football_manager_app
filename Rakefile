# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

namespace :match do
  desc "Run the match script"
  task :run => :environment do
    @leagues = League.all

    @leagues.each do |league|

      # Increment the gameday number for the current league.
      gameday_number = league.gameday_number
      gameday_number += 1
      league.update(:gameday_number => gameday_number)

      # Run as many times as necessary to complete one gameday.
      league.matches_per_gameday.times do |i|

        # Get all of the matches for this league.
        @matches = league.matches.sort

        # Find the current number of matches played to use as an index to pick from league.matches.
        matches_played = league.matches_played

        # Checks to see if there are any matches left to run and returns if there are none.
        raise 'There are no matches left to run' if @matches[matches_played] == nil

        # Get the next match from the set to be played this game day.
        current_match = @matches[matches_played]

        # Retrieve the home and away team objects and their tactic models.
        home = Team.find current_match.home_team_id
        away = Team.find current_match.away_team_id
        home_tactic = home.tactic
        away_tactic = away.tactic

        # Calculate number of chances to score per team:
        home_chances = 0
        away_chances = 0

        # This currently makes it unfair for teams on a bad run of form. This needs to be fixed.
        # # Form:
        # if home.form_rating > away.form_rating
        #   home_chances += 1
        # elsif away.form_rating > home.form_rating
        #   away_chances += 1
        # end

        # Ratings:
        if home.overall_rating > away.overall_rating
          home_chances += 1
        elsif away.overall_rating > home.overall_rating
          away_chances += 1
        end

        # Bonuses:
        # Home bonus
        home_chances *= 2

        # Wildcard bonus:
        home_chances *= rand(1..3)
        away_chances *= rand(1..3)

        # Evaluation of chances:
        home_goals = 0
        away_goals = 0

        home_chances.times do |i|
          home_goals += [0, 1].sample
        end

        away_chances.times do |i|
          away_goals += [0, 1].sample
        end

        # Set winner
        home_result = ''
        away_result = ''
        home_team_points = home.points
        away_team_points = away.points
        home_bank_balance = home.bank_balance
        away_bank_balance = away.bank_balance
        home_form_rating = home.form_rating
        away_form_rating = away.form_rating

        home_played = home.played
        away_played = away.played
        home_win = home.win
        away_win = away.win
        home_loss = home.loss
        away_loss = away.loss
        home_draw = home.draw
        away_draw = away.draw
        home_goals_for = home.goals_for
        away_goals_for = away.goals_for
        home_goals_against = home.goals_against
        away_goals_against = away.goals_against
        home_goal_difference = home.goal_difference
        away_goal_difference = away.goal_difference

        home_played += 1
        away_played += 1
        home_goals_for += home_goals
        away_goals_for += away_goals
        home_goals_against += away_goals
        away_goals_against += home_goals
        home_goal_difference = (home_goals_for - home_goals_against)
        away_goal_difference = (away_goals_for - away_goals_against)

        if home_goals > away_goals
          home_result += 'W'
          away_result += 'L'
          home_team_points += 3
          home_bank_balance += 2_000_000
          away_bank_balance += 500_000
          home_form_rating += 15
          away_form_rating -= 5
          home_win += 1
          away_loss += 1
        elsif away_goals > home_goals
          home_result += 'L'
          away_result += 'W'
          away_team_points += 3
          home_bank_balance += 500_000
          away_bank_balance += 2_000_000
          home_form_rating -= 5
          away_form_rating += 15
          home_loss += 1
          away_win += 1
        else
          home_result += 'D'
          away_result += 'D'
          home_team_points += 1
          away_team_points += 1
          home_bank_balance += 1_000_000
          away_bank_balance += 1_000_000
          home_form_rating += 5
          away_form_rating += 5
          home_draw += 1
          away_draw += 1
        end

        # Update league.matches_played so that next time round it will evaluate a new match/move on to the next one.
        matches_played += 1
        league.update(:matches_played => matches_played)

        # Update match object with stats.
        current_match.update(:home_goals => home_goals, :away_goals => away_goals, :home_result => home_result, :away_result => away_result)

        # Update team objects with points and money.
        home.update(:points => home_team_points, :bank_balance => home_bank_balance, :form_rating => home_form_rating, :played => home_played, :win => home_win, :loss => home_loss, :draw => home_draw, :goals_for => home_goals_for, :goals_against => home_goals_against, :goal_difference => home_goal_difference)

        away.update(:points => away_team_points, :bank_balance => away_bank_balance, :form_rating => away_form_rating, :played => away_played, :win => away_win, :loss => away_loss, :draw => away_draw, :goals_for => away_goals_for, :goals_against => away_goals_against, :goal_difference => away_goal_difference)

        # Put the match object into the home and away teams' matches arrays so that they can access the stats.
        home.matches << current_match
        away.matches << current_match
      end
    end
  end
end
