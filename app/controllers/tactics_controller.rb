class TacticsController < ApplicationController
  def index
    if params["id"]
      @tactics = Tactic.find params["id"]
    else
      @tactics = Tactic.all
    end
    render :json => @tactics
  end

  def new
    @tactic = Tactic.new
  end

  def create
    @tactic = Tactic.create tactic_params
  end

  def show
    @tactic = Tactic.find params[:id]
  end

  def edit
    @tactic = Tactic.find params[:id]
  end

  def update
    @tactic = Tactic.find params["id"]
    @tactic.update tactic_params
    render :json => @tactic
  end

  def destroy
    @tactic = Tactic.find params[:id]
    @tactic.destroy
  end

  private
  def tactic_params
    params.require(:tactic).permit(:team_id, :formation, :tempo, :playing_style, :passing, :tackling)
  end
end
