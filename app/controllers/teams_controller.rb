class TeamsController < ApplicationController
  def index
    @teams = Team.all
    render :json => @teams
  end

  def new
    @team = Team.new
  end

  def create
    # @team = Team.create({
    #   :league_id => params[:league_id],
    #   :user_id => params[:user_id],
    #   :name => params[:name],
    #   :overall_rating => params[:overall_rating],
    #   :league_position => params[:league_position],
    #   :total_value => params[:total_value],
    #   :bank_balance => params[:bank_balance],
    #   :form_rating => params[:form_rating],
    #   :emblem => params[:emblem]
    # })
    # So console stops complaining about not having a template.
    # Boo hoo, console.
    render :json => @team
  end

  def show
    @team = Team.find params[:id]
  end

  def edit
    @team = Team.find params[:id]
  end

  def update
    @team = Team.find params[:id]
    @team.update(
      :user_id => params[:user_id]
    )

    render :json => @team
  end

  def destroy
    @team = Team.find params[:id]
    @team.destroy
  end

  def user_info
    @team = @current_user.team
    render :json => @team
  end

  private
  def team_params
    params.require(:team).permit(:league_id, :user_id, :name, :overall_rating, :league_position, :total_value, :bank_balance, :form_rating, :emblem)
  end
end
