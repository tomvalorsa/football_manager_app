class Team < ActiveRecord::Base
  has_and_belongs_to_many :matches
  has_many :players
  belongs_to :league
  has_one :tactic
end
