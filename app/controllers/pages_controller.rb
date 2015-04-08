class PagesController < ApplicationController
  def home
    redirect_to '/dashboard#home' if @current_user
  end

  def index
  end

  def current_team_stats
    @team = @current_user.team
    render :json => @team
  end

  # Site management actions:
  def site_management
    check_if_admin
  end

  def user_index
    check_if_admin
    @users = User.all
  end

  def team_index
    check_if_admin
    @teams = Team.all
  end

  def league_index
    check_if_admin
    @leagues = League.all
  end

  private
  def check_if_admin
    unless @current_user.is_admin?
      redirect_to '/dashboard#home'
    end
  end

end
