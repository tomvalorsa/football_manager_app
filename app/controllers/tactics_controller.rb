class TacticsController < ApplicationController
  def index
    if params["id"]
      @tactics = Tactic.find params["id"]
    else
      @tactics = Tactic.all
    end
    render :json => @tactics
  end

  def update
    @tactic = Tactic.find params["id"]
    @tactic.update tactic_params
    render :json => @tactic
  end

  private
  def tactic_params
    params.require(:tactic).permit(:team_id, :formation, :tempo, :playing_style, :passing, :tackling)
  end
end
