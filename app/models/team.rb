# == Schema Information
#
# Table name: teams
#
#  id              :integer          not null, primary key
#  league_id       :integer
#  user_id         :integer
#  name            :string
#  overall_rating  :integer
#  league_position :integer
#  total_value     :integer
#  bank_balance    :integer
#  form_rating     :integer          default(50)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  emblem          :text
#

class Team < ActiveRecord::Base
  has_and_belongs_to_many :matches
  has_many :players
  belongs_to :league
  has_one :tactic
  has_one :user
end
