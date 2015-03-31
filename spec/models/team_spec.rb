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
#  points          :integer          default(0)
#  played          :integer          default(0)
#  win             :integer          default(0)
#  loss            :integer          default(0)
#  draw            :integer          default(0)
#  goals_for       :integer          default(0)
#  goals_against   :integer          default(0)
#  goal_difference :integer          default(0)
#

require 'rails_helper'

RSpec.describe Team, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
end
