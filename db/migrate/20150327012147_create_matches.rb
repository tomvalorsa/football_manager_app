class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :league_id
      t.integer :home_team_id
      t.integer :away_team_id
      t.integer :home_goals, :default => 0
      t.integer :away_goals, :default => 0
      t.string :home_result, :default => ''
      t.string :away_result, :default => ''
      t.integer :home_fouls, :default => 0
      t.integer :away_fouls, :default => 0
      t.integer :home_possession, :default => 0
      t.integer :away_possession, :default => 0
      t.string :man_of_match, :default => ''
      t.timestamps null: false
    end
  end
end
