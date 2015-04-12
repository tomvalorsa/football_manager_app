# == Schema Information
#
# Table name: matches
#
#  id              :integer          not null, primary key
#  league_id       :integer
#  home_team_id    :integer
#  away_team_id    :integer
#  home_goals      :integer          default(0)
#  away_goals      :integer          default(0)
#  home_result     :string           default("")
#  away_result     :string           default("")
#  home_fouls      :integer          default(0)
#  away_fouls      :integer          default(0)
#  home_possession :integer          default(0)
#  away_possession :integer          default(0)
#  man_of_match    :string           default("")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  home_team       :string
#  away_team       :string
#

class Match < ActiveRecord::Base
  belongs_to :league
  has_and_belongs_to_many :teams
end
