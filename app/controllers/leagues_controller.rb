class LeaguesController < ApplicationController
  def index
    if params["id"]
      @leagues = League.find params["id"]
    else
      @leagues = League.all
    end
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
        # could change this to i
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
      18.times do |i|
        if i < 2
          position = 'GK'
        elsif i < 8
          position = 'DF'
        elsif i < 14
          position = 'MF'
        else
          position = 'FW'
        end

        first_array = ['Andrea', 'Francesco', 'Alessandro', 'Cristiano', 'Domenico', 'Mauro', 'Tommaso', 'Damiano']
        last_array = ['Pirlo', 'Totti', 'Del Piero', 'Doni', 'Barzagli', 'Icardi', 'Valorsa', 'Tomassi']

        player = Player.create({
          :team_id => team.id,
          :first_name => first_array.sample,
          :last_name => last_array.sample,
          :age => 24,
          :nationality => 'Italian',
          :attack_rating => 91,
          :defence_rating => 87,
          :value => 40_000_000,
          :position => position
        })
      end

      tactic = Tactic.create({
        :team_id => team.id
      })
    end

    # Create all matches and assign home and away ids in such an order that they can be picked out in order when it comes to the match schedule.
    matches_per_team = (@league.size * 2) - 2
    matches_per_league = matches_per_team * (@league.size / 2)

    require 'round_robin_tournament'
    @teams = @league.teams
    @team_ids = @teams.map {|team| team.id }
    pairs = RoundRobinTournament.schedule(@team_ids).flatten(1)

    # pairs doesn't work below as it runs out of pairs of teams to supply, it needs twice as much for the home and away fixtures. FOR NOW I will leave it so each team plays each other only once (hence matches_per_league /2).

    (matches_per_league / 2).times do |i|
      match = Match.create(
        league_id: @league.id,
        home_team_id: pairs[i][0],
        away_team_id: pairs[i][1]
      )
    end

    # # Need to loop though teams array and zip together home and away fixtures.
    # @teams = @league.teams.order(:id).to_a
    # num_team_matches = (@league.size * 2) - 2
    # num_matches = num_team_matches * (@league.size / 2)
    # num_teams = @teams.length

    # copy_count = num_matches / num_teams

    # home_team_array = []
    # away_team_array = []

    # copy_count.times do |i|
    #   home_team_array << @teams
    # end

    # home_team_array.flatten!

    # copy_count.times do |i|
    #   away_team_array << @teams.rotate!.clone
    # end

    # away_team_array.flatten!

    # # This is an array containing pairs of team objects, each pair represents a fixture for the season.
    # fixture_pairings = home_team_array.zip(away_team_array)

    # # Then they can be passed in to the loop below.
    # # Then loop through update match objects with home and away team ids.
    # @matches = @league.matches.order(:id)

    # @matches.each_with_index do |match, i|
    #   match.update(
    #     :home_team_id => fixture_pairings[i][0].id,
    #     :away_team_id => fixture_pairings[i][1].id
    #   )
    #   fixture_pairings[i][0].matches << match
    #   fixture_pairings[i][1].matches << match
    # end



    render :json => @league
  end

  def show
    @league = League.find params["id"]
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
