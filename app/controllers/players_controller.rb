class PlayersController < ApplicationController
  def index
    if params["team_id"]
      @players = Player.where(:team_id => params["team_id"])
    else
      @players = Player.all
    end
    render :json => @players
  end

  def new
    @player = Player.new
  end

  def create
    @player = Player.create player_params
  end

  def show
    @player = Player.find params[:id]
  end

  def edit
    @player = Player.find params[:id]
  end

  def update
    @player = Player.find params[:id]
    @player.update player_params
  end

  def destroy
    @player = Player.find params[:id]
    @player.destroy
  end

  private
  def player_params
    params.require(:player).require(:team_id, :first_name, :last_name, :age, :nationality, :attack_rating, :defence_rating, :value, :position, :goals, :assists, :yellow_cards, :red_cards, :mom_count, :injured)
  end
end
