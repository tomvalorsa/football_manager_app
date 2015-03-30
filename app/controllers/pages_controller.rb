class PagesController < ApplicationController
  def home
  end

  def index
    # binding.pry
  end

  def match_script
    # Match Script

    # Find the right league.

    @league = League.first

    @teams = @league.teams.order(:id)
    binding.pry
    render :json => @teams
  end
end
