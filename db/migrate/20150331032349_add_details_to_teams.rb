class AddDetailsToTeams < ActiveRecord::Migration
  def change
    add_column :teams, :played, :integer, :default => 0
    add_column :teams, :win, :integer, :default => 0
    add_column :teams, :loss, :integer, :default => 0
    add_column :teams, :draw, :integer, :default => 0
    add_column :teams, :goals_for, :integer, :default => 0
    add_column :teams, :goals_against, :integer, :default => 0
    add_column :teams, :goal_difference, :integer, :default => 0
  end
end
