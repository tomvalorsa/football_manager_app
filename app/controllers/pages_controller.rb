class PagesController < ApplicationController
  def home
    redirect_to '/dashboard#home' if @current_user
  end

  def how_to_play
  end

  def index
    unless @current_user.team
      redirect_to pick_league_path
    end
  end

  def current_team_stats
    @team = @current_user.team
    render :json => @team
  end

  def user_match_data
    @team = @current_user.team
    @matches = @team.matches

    # Makes sure that the matches will have the right team names if
    # the user decides to update their team name via Backbone.
    @matches.each do |match|
      if match.home_team_id == @current_user.team.id
        match.update(:home_team => @current_user.team.name)
      elsif match.away_team_id == @current_user.team.id
        match.update(:away_team => @current_user.team.name)
      end
    end

    render :json => @matches
  end

  def user_tactic_data
    @tactic = @current_user.team.tactic
    render :json => @tactic
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
