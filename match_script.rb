@leagues = League.all

# This and the above needs to be reconsidered as this will get all of the matches every time.
# Should make a copy of all of a leagues matches that I can take a slice out of each match day. Needs to remember that matches have been taken out.
# This won't take them away from the league, but by having a copy of it that slowly decreases in size I can see how many games are left in the season.
@leagues.each do |league|

  # Get all of the matches for this league.
  @matches = league.matches

  # Find out how many games need to be run
  num_matches_per_gameday = league.size / 2

  # Run the following match program that many times.
  num_matches_per_gameday.times do |i|

    current_match = @matches.shift

    home = Team.find current_match.home_team_id
    away = Team.find current_match.away_team_id

    home_tactic = home.tactic
    away_tactic = away.tactic

    # Maths etc.
    home_chances = 0
    away_chances = 0

    # Nobody gets a chance if they're equal. Stalemate.

    # Form
    if home.form_rating > away.form_rating
      home_chances += 1
    elsif away.form_rating > home.form_rating
      away_chances += 1
    end

    # Ratings
    if home.overall_rating > away.overall_rating
      home_chances += 1
    elsif away.overall_rating > home.overall_rating
      away_chances += 1
    end

    # Bonuses:
    # Home bonus
    home_chances *= 2

    # Wildcard bonus
    home_chances *= rand(1..3)
    away_chances *= rand(1..3)


    # Evaluation of chances
    home_goals = 0
    away_goals = 0

    home_chances.times do |i|
      home_goals += (i + 1) * ([0, 1].sample)
    end

    away_chances.times do |i|
      away_goals += (i + 1) * ([0, 1].sample)
    end

    # Set winner
    home_result = ''
    away_result = ''
    home_team_points = 0
    away_team_points = 0
    home_prize_money = 0
    away_prize_money = 0

    if home_goals > away_goals
      home_result += 'W'
      away_result += 'L'
      home_team_points += 3
      home_prize_money += 2_000_000
      away_prize_money += 500_000
    elsif away_goals > home_goals
      home_result += 'L'
      away_result += 'W'
      away_team_points += 3
      home_prize_money += 500_000
      away_prize_money += 2_000_000
    else
      home_result += 'D'
      away_result += 'D'
      home_team_points += 1
      away_team_points += 1
      home_prize_money = 1_000_000
      away_prize_money = 1_000_000
    end

    # Update match object with stats
    current_match.update(stuff)

    # Update team objects with points and money.
    home.update(:points, :bank_balance => )
    away.update(results etc.)
  end

end
