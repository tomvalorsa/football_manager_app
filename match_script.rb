@leagues = League.all

@leagues.each do |league|

  # Go into each league, get their Gameday model (or just columns in the league model. gameday_number and matches_per_gameday)
  # Gameday should have a gameday_number (which will tell us what stage of the season the league is at)
  # At the start of every match script the gameday should be increased by 1
  # Then we can say get league.size/2 amount of matches from the array, starting at (gameday_number - 1)
    # so on gameday 1, we can get matches_per_gameday amount of matches starting from the index of 0 in the array
    # on gameday 2 it would start from index of 1 and retrieve a game that's already been played...
    # FIX - this could instead be used to calculate how many times the loop needs to run below.
  # Could fix this by having a games_played column in the league model
    # This would keep a count of all of the games played (and would be updated with the models at the end of every match the script runs on)
    # so on gameday 1, we can get games_played which will be 0. we can start from the index of games_played in the matches array
      # for a league of 4 teams, this will means that we need 2 matches. at the end games_played will have been incremented by 2
    # so on gameday 2, we can get games_played which will be 2. we can start from the index of games_played in the matches array
      # this will get us index 2, so start from the 3rd match in the array, ignoring the first 2 that have already been played.


  # Get all of the matches for this league.
  @matches = league.matches


# Below seems fine. Need to sort out home to get the right matches above.
#######################################################

  # Find out how many games need to be run.
  num_matches_per_gameday = league.size / 2

  # Run the following match program that many times.
  num_matches_per_gameday.times do |i|

    # Get a match from the set to be played this game day.
    # IS SHIFT THE RIGHT METHOD? Might take them out permanently. Just need to get a sample/slice.
    current_match = @matches.shift

    # Retrieve the home and away team objects and their tactic models.
    home = Team.find current_match.home_team_id
    away = Team.find current_match.away_team_id
    home_tactic = home.tactic
    away_tactic = away.tactic

    # Calculate number of chances to score per team:
    home_chances = 0
    away_chances = 0

    # Nobody gets a chance if they're equal. Stalemate.

    # Form:
    if home.form_rating > away.form_rating
      home_chances += 1
    elsif away.form_rating > home.form_rating
      away_chances += 1
    end

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
      home_goals += (i + 1) * ([0, 1].sample)
    end

    away_chances.times do |i|
      away_goals += (i + 1) * ([0, 1].sample)
    end

    # Set winner
    home_result = ''
    away_result = ''
    home_team_points = home.points
    away_team_points = away.points
    home_bank_balance = home.bank_balance
    away_bank_balance = away.bank_balance

    if home_goals > away_goals
      home_result += 'W'
      away_result += 'L'
      home_team_points += 3
      home_bank_balance += 2_000_000
      away_bank_balance += 500_000
    elsif away_goals > home_goals
      home_result += 'L'
      away_result += 'W'
      away_team_points += 3
      home_bank_balance += 500_000
      away_bank_balance += 2_000_000
    else
      home_result += 'D'
      away_result += 'D'
      home_team_points += 1
      away_team_points += 1
      home_bank_balance += 1_000_000
      away_bank_balance += 1_000_000
    end

    # Update match object with stats.
    current_match.update(:home_goals => home_goals, :away_goals => away_goals, :home_result => home_result, :away_result => away_result)

    # Update team objects with points and money.
    home.update(:points => home_team_points, :bank_balance => home_bank_balance)
    away.update(:points => away_team_points, :bank_balance => away_bank_balance)

    # Put the match object into the home and away teams' matches arrays so that they can access the stats.
    home.matches << current_match
    away.matches << current_match
  end

end
