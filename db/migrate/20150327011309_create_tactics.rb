class CreateTactics < ActiveRecord::Migration
  def change
    create_table :tactics do |t|
      t.integer :team_id
      t.string :formation
      t.string :tempo
      t.string :playing_style
      t.string :passing
      t.string :tackling
      t.timestamps null: false
    end
  end
end
