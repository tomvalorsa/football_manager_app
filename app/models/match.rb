# == Schema Information
#
# Table name: matches
#
#  id              :integer          not null, primary key
#  league_id       :integer
#  home_team       :string
#  away_team       :string
#  home_goals      :integer
#  away_goals      :integer
#  home_result     :string
#  away_result     :string
#  home_fouls      :integer
#  away_fouls      :integer
#  home_possession :integer
#  away_possession :integer
#  man_of_match    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Match < ActiveRecord::Base
  belongs_to :league
  has_and_belongs_to_many :teams
end
