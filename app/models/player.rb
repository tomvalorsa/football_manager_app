# == Schema Information
#
# Table name: players
#
#  id             :integer          not null, primary key
#  team_id        :integer
#  first_name     :string
#  last_name      :string
#  age            :integer
#  nationality    :string
#  attack_rating  :integer
#  defence_rating :integer
#  value          :integer
#  position       :string
#  goals          :integer
#  assists        :integer
#  yellow_cards   :integer
#  red_cards      :integer
#  mom_count      :integer
#  injured        :boolean          default("false")
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Player < ActiveRecord::Base
  belongs_to :team
end
