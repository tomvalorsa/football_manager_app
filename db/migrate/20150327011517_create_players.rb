class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.integer :team_id
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :nationality
      t.integer :attack_rating
      t.integer :defence_rating
      t.integer :value
      t.string :position
      t.integer :goals
      t.integer :assists
      t.integer :yellow_cards
      t.integer :red_cards
      t.integer :mom_count
      t.boolean :injured, :default => false
      t.timestamps null: false
    end
  end
end
