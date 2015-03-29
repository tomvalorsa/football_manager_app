class LeaguesController < ApplicationController
  def index
    @leagues = League.all
    render :json => @leagues
  end

  def new
    @league = League.new
  end

  def create
    # binding.pry
    @league = League.create({
      :name => params[:name],
      :emblem => params[:emblem],
      :nation => params[:nation],
      :size => params[:size]
    })
    # When a league is created, make the teams:
    @league.size.times do |i|
      team = Team.create({
        :league_id => @league.id,
        :user_id => nil,
        :name => "Team #{ i + 1 }",
        :overall_rating => nil,
        :league_position => nil,
        :total_value => 0,
        :bank_balance => 30_000_000,
        :form_rating => 50,
        :emblem => ''
      })

      # binding.pry
      # Need an accurate number of players here.
      # Also need to make names, positions and rating dynamic.
      # Create the players for each team:
      16.times do |i|
        player = Player.create({
          :team_id => team.id,
          :first_name => 'Andrea',
          :last_name => 'Pirlo',
          :age => 24,
          :nationality => 'Italian',
          :attack_rating => 91,
          :defence_rating => 87,
          :value => 40_000_000,
          :position => 'MF'
        })
      end

      tactic = Tactic.create({
        :team_id => team.id
      })
    end

    # Then make all of the matches here...sheet.
    matches_per_team = (@league.size * 2) - 2
    matches_per_league = matches_per_team * (@league.size / 2)

    matches_per_league.times do |i|
      match = Match.create({
        :league_id => @league.id
      })
    end

    # Need to loop though teams array and zip together home and away fixtures.
    @teams = @league.teams.order(:id).to_a
    num_team_matches = (@league.size * 2) - 2
    num_matches = num_team_matches * (@league.size / 2)
    num_teams = @teams.length

    copy_count = num_matches / num_teams

    home_team_array = []
    away_team_array = []

    copy_count.times do |i|
      home_team_array << @teams
    end

    home_team_array.flatten!

    copy_count.times do |i|
      away_team_array << @teams.rotate!.clone
    end

    away_team_array.flatten!

    # This is an array containing pairs of team objects, each pair represents a fixture for the season.
    fixture_pairings = home_team_array.zip(away_team_array)

    # Then they can be passed in to the loop below.
    # Then loop through update match objects with home and away team ids.
    @matches = @league.matches.order(:id)

    @matches.each_with_index do |match, i|
      match.update(
        :home_team_id => fixture_pairings[i][0].id,
        :away_team_id => fixture_pairings[i][1].id
      )
    end

    render :json => @league
  end

  def show
    @league = League.find params[:id]
  end

  def edit
    @league = League.find params[:id]
  end

  def update
    @league = League.find params[:id]
    @league.update league_params
    # redirect_to ...
  end

  def destroy
    @league = League.find params[:id]
    @league.destroy
    # redirect_to ...
  end

  private
  def league_params
    params.require(:league).permit(:name, :nation, :size, :emblem)
  end
end
