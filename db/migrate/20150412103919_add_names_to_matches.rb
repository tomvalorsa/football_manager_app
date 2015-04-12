class AddNamesToMatches < ActiveRecord::Migration
  def change
    add_column :matches, :home_team, :string
    add_column :matches, :away_team, :string
  end
end
