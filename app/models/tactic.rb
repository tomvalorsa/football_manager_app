# == Schema Information
#
# Table name: tactics
#
#  id            :integer          not null, primary key
#  team_id       :integer
#  formation     :string           default("4-4-2")
#  tempo         :string           default("balanced")
#  playing_style :string           default("balanced")
#  passing       :string           default("balanced")
#  tackling      :string           default("balanced")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Tactic < ActiveRecord::Base
  has_one :team
end
