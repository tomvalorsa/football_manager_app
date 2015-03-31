class PagesController < ApplicationController
  def home
  end

  def index
    # binding.pry
  end

  def current_team_stats

    @team = @current_user.team
    render :json => @team

  end

end
