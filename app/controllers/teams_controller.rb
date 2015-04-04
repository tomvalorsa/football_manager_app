class TeamsController < ApplicationController
  def index
    # This receives the data object in the relevant fetch request.
    if params["league_id"] && params["user_id"]
      @teams = Team.where(:league_id => params["league_id"])
    elsif params["league_id"]
      # Limits the teams to the ones that belong to the league and the ones that aren't taken.
      @teams = Team.where(:league_id => params["league_id"], :user_id => nil)
    else
      @teams = Team.all
    end
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
      :user_id => params[:user_id],
      :name => params['name'],
      :emblem => params['emblem']
    )

    render :json => @team
  end

  def destroy
    @team = Team.find params[:id]
    @team.destroy
    redirect_to '/manage-teams'
  end

  def user_info
    @team = @current_user.team
    render :json => @team
  end

  def set_user_team
    # binding.pry
    @team = Team.find params["team_id"]
    @current_user.team = @team
  end

  private
  def team_params
    params.require(:team).permit(:league_id, :user_id, :name, :overall_rating, :league_position, :total_value, :bank_balance, :form_rating, :emblem, :points)
  end
end
