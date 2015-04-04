class PagesController < ApplicationController
  def home
    redirect_to '/dashboard#home' if @current_user
  end

  def index
    # binding.pry
  end

  def current_team_stats

    @team = @current_user.team
    render :json => @team

  end

end
