class CreateLeagues < ActiveRecord::Migration
  def change
    create_table :leagues do |t|
      t.string :name
      t.string :nation
      t.integer :size
      t.timestamps null: false
    end
  end
end
