# == Schema Information
#
# Table name: leagues
#
#  id                  :integer          not null, primary key
#  name                :string
#  nation              :string
#  size                :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  emblem              :text
#  gameday_number      :integer          default(0)
#  matches_per_gameday :integer
#  matches_played      :integer          default(0)
#

class League < ActiveRecord::Base
  has_many :teams
  has_many :matches
end
