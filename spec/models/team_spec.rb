# == Schema Information
#
# Table name: teams
#
#  id              :integer          not null, primary key
#  league_id       :integer
#  name            :string
#  overall_rating  :integer
#  league_position :integer
#  total_value     :integer
#  bank_balance    :integer
#  form_rating     :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe Team, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
