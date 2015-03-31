class MatchesController < ApplicationController
  def index
    @matches = Match.all
    render :json => @matches
  end

  def new
    @match = Match.new
  end

  def create
    @match = Match.create match_params
  end

  def show
    @match = Match.find params[:id]
  end

  def edit
    @match = Match.find params[:id]
  end

  def update
    @match = Match.find params[:id]
    @match.update match_params
    # redirect_to ...
  end

  def destroy
    @match = Match.find params[:id]
    @match.destroy
    # redirect_to ...
  end

  private
  def match_params
    params.require(:match).permit(:league_id, :home_team, :away_team, :home_goals, :away_goals, :home_result, :away_result, :home_fouls, :away_fouls, :home_possession, :away_possession, :man_of_match)
  end
end
