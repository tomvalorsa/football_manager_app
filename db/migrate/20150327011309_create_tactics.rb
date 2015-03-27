class CreateTactics < ActiveRecord::Migration
  def change
    create_table :tactics do |t|
      t.integer :team_id
      t.string :formation, :default => '4-4-2'
      t.string :tempo, :default => 'balanced'
      t.string :playing_style, :default => 'balanced'
      t.string :passing, :default => 'balanced'
      t.string :tackling, :default => 'balanced'
      t.timestamps null: false
    end
  end
end
