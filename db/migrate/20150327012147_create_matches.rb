class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :league_id
      t.string :home_team
      t.string :away_team
      t.integer :home_goals, :default => 0
      t.integer :away_goals, :default => 0
      t.string :home_result, :default => nil
      t.string :away_result, :default => nil
      t.integer :home_fouls, :default => 0
      t.integer :away_fouls, :default => 0
      t.integer :home_possession, :default => 0
      t.integer :away_possession, :default => 0
      t.string :man_of_match, :default => nil
      t.timestamps null: false
    end
  end
end
