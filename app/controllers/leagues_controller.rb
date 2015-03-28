class LeaguesController < ApplicationController
  def index
    @leagues = League.all
    render :json => @leagues
  end

  def new
    @league = League.new
  end

  def create
    # binding.pry
    @league = League.create({
      :name => params[:name],
      :emblem => params[:emblem],
      :nation => params[:nation],
      :size => params[:size]
    })
    render :json => @league
  end

  def show
    @league = League.find params[:id]
  end

  def edit
    @league = League.find params[:id]
  end

  def update
    @league = League.find params[:id]
    @league.update league_params
    # redirect_to ...
  end

  def destroy
    @league = League.find params[:id]
    @league.destroy
    # redirect_to ...
  end

  private
  def league_params
    params.require(:league).permit(:name, :nation, :size, :emblem)
  end
end
