class PlayersController < ApplicationController
  def index
    if params["team_id"]
      @players = Player.where(:team_id => params["team_id"])
    else
      @players = Player.all
    end
    render :json => @players
  end

  private
  def player_params
    params.require(:player).require(:team_id, :first_name, :last_name, :age, :nationality, :attack_rating, :defence_rating, :value, :position, :goals, :assists, :yellow_cards, :red_cards, :mom_count, :injured)
  end
end
