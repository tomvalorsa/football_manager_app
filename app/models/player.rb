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
#  goals          :integer          default(0)
#  assists        :integer          default(0)
#  yellow_cards   :integer          default(0)
#  red_cards      :integer          default(0)
#  mom_count      :integer          default(0)
#  injured        :boolean          default(FALSE)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Player < ActiveRecord::Base
  belongs_to :team
end
