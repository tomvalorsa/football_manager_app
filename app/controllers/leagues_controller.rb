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
    matches_per_gameday = (params[:size].to_i / 2)

    # Set default for league emblem in case user doesn't include their own.
    league_emblem = params[:emblem] == '' ?
      'http://www.clker.com/cliparts/d/8/9/b/1298268524507354096Trophy.svg.hi.png' :
      params[:emblem]

    @league = League.create({
      :name => params[:name],
      :emblem => league_emblem,
      :nation => params[:nation],
      :size => params[:size],
      :matches_per_gameday => matches_per_gameday
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

        if params[:nation] == 'England'
          first_array = %w(Oliver Jack Harry Charlie James Joshua Alfie Thomas Jacob Ethan Noah Daniel George William Samuel Alexander Oscar Lucas Dylan Max Benjamin)
          last_array = %w(Smith Anderson Clark Wright Mitchell Johnson Thomas Rodriguez Lopez Perez Williams Jackson Lewis Roberts Jones White Lee Scott Turner)
        else # keep Italians as default for now.
          first_array = %w(Francesco Alessandro Andrea Lorenzo Matteo Gabriele Mattia Leonardo Davide Riccardo Federico Luca Giuseppe Marco Tommaso Antonio Simone Samuele Giovanni Pietro Christian Nicolo Alessio Edoardo Diego Filippo Emanuele Daniele Michele Cristian)
          last_array = %w(Pirlo Totti Del\ Piero Doni Barzagli Icardi Valorsa Tomassi Rossi Russo Ferrari Esposito Bianchi Romano Colombo Ricci Marino Greco Bruno Gallo Conti De\ Luca Mancini Costa Giordano Rizzo Lombardi Moretti)
        end

        attack = rand(59..90)
        defence = rand(59..90)
        age = rand(18..33)

        value = ((attack + defence) / 2) * 500_000

        player = Player.create({
          :team_id => team.id,
          :first_name => first_array.sample,
          :last_name => last_array.sample,
          :age => age,
          :nationality => 'Italian',
          :attack_rating => attack,
          :defence_rating => defence,
          :value => value,
          :position => position
        })

        @current_team = Team.find team.id
        total_value = 0
        overall_rating = 0
        @current_team.players.each do |player|
          total_value += player.value
          overall_rating += ((player.attack_rating + player.defence_rating) / 2)
        end

        overall_rating = overall_rating / 18

        @current_team.update(:total_value => total_value, :overall_rating => overall_rating)
      end

      tactic = Tactic.create({
        :team_id => team.id
      })
    end

    # Create all matches and assign home and away ids in such an order that they can be picked out in order when it comes to the match schedule.
    matches_per_team = (@league.size * 2) - 2
    matches_per_league = matches_per_team * (@league.size / 2)

    # Needs to be worked out for the second half of a season.
    @teams = @league.teams
    @team_ids = @teams.map {|team| team.id }
    @team_names = @teams.map {|team| team.name }
    pairs = RoundRobinTournament.schedule(@team_ids).flatten(1)
    name_pairs = RoundRobinTournament.schedule(@team_names).flatten(1)

    (matches_per_league / 2).times do |i|
      match = Match.create(
        league_id: @league.id,
        home_team_id: pairs[i][0],
        away_team_id: pairs[i][1],
        home_team: name_pairs[i][0],
        away_team: name_pairs[i][1]
      )
    end

    redirect_to '/pick-league'
  end

  def show
    @league = League.find params["id"]
    @teams = @league.teams.sort
  end

  def edit
    @league = League.find params[:id]
  end

  def update
    @league = League.find params[:id]
    @league.update league_params
    redirect_to '/manage-leagues'
  end

  def destroy
    @league = League.find params[:id]
    @league.destroy
    redirect_to '/manage-leagues'
  end

  def pick_league
    @leagues = League.order(:name)
  end

  private
  def league_params
    params.require(:league).permit(:name, :nation, :size, :emblem, :gameday_number, :matches_per_gameday, :matches_played)
  end
end
