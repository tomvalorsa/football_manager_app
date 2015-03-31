class AddGamedayInfoToLeagues < ActiveRecord::Migration
  def change
    add_column :leagues, :gameday_number, :integer, :default => 0
    add_column :leagues, :matches_per_gameday, :integer
    add_column :leagues, :matches_played, :integer, :default => 0
  end
end
