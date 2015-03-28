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

    @league.size.times do |i|
      team = Team.create({
        :league_id => @league.id,
        :user_id => nil,
        :name => "Team #{ i + 1 }",
        :overall_rating => nil,
        :league_position => nil,
        :total_value => 0,
        :bank_balance => 30_000_000,
        :form_rating => 50,
        :emblem => ''
      })

      # binding.pry
      # Need an accurate number of players here.
      # Also need to make names, positions and rating dynamic.
      16.times do |i|
        player = Player.create({
          :team_id => team.id,
          :first_name => 'Andrea',
          :last_name => 'Pirlo',
          :age => 24,
          :nationality => 'Italian',
          :attack_rating => 91,
          :defence_rating => 87,
          :value => 40_000_000,
          :position => 'MF'
        })
      end
    end

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
