class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :league_id
      t.string :home_team
      t.string :away_team
      t.integer :home_goals
      t.integer :away_goals
      t.string :home_result
      t.string :away_result
      t.integer :home_fouls
      t.integer :away_fouls
      t.integer :home_possession
      t.integer :away_possession
      t.string :man_of_match
      t.timestamps null: false
    end
  end
end
