# == Schema Information
#
# Table name: tactics
#
#  id            :integer          not null, primary key
#  team_id       :integer
#  formation     :string
#  tempo         :string
#  playing_style :string
#  passing       :string
#  tackling      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Tactic, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
end
