class AddEmblemToTeams < ActiveRecord::Migration
  def change
    add_column :teams, :emblem, :text
  end
end
