class AddEmblemToLeagues < ActiveRecord::Migration
  def change
    add_column :leagues, :emblem, :text
  end
end
