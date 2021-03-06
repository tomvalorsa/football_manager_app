class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.integer :league_id
      t.integer :user_id
      t.string :name
      t.integer :overall_rating
      t.integer :league_position, :default => nil
      t.integer :total_value
      t.integer :bank_balance
      t.integer :form_rating, :default => 50
      t.timestamps null: false
    end
  end
end
