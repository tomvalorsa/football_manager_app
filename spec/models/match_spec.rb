# == Schema Information
#
# Table name: matches
#
#  id              :integer          not null, primary key
#  league_id       :integer
#  home_team       :string
#  away_team       :string
#  home_goals      :integer          default("0")
#  away_goals      :integer          default("0")
#  home_result     :string
#  away_result     :string
#  home_fouls      :integer          default("0")
#  away_fouls      :integer          default("0")
#  home_possession :integer          default("0")
#  away_possession :integer          default("0")
#  man_of_match    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe Match, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
end
