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
      t.integer :goals, :default => 0
      t.integer :assists, :default => 0
      t.integer :yellow_cards, :default => 0
      t.integer :red_cards, :default => 0
      t.integer :mom_count, :default => 0
      t.boolean :injured, :default => false
      t.timestamps null: false
    end
  end
end
