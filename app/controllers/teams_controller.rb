class TeamsController < ApplicationController
  def index
    @teams = Team.all
    render :json => @teams
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.create team_params
  end

  def show
    @team = Team.find params[:id]
  end

  def edit
    @team = Team.find params[:id]
  end

  def update
    @team = Team.find params[:id]
    @team.update team_params
  end

  def destroy
    @team = Team.find params[:id]
    @team.destroy
  end

  private
  def team_params
    params.require(:team).permit(:league_id, :user_id, :name, :overall_rating, :league_position, :total_value, :bank_balance, :form_rating)
  end
end
