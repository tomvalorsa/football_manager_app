# == Schema Information
#
# Table name: leagues
#
#  id         :integer          not null, primary key
#  name       :string
#  nation     :string
#  size       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  emblem     :text
#

require 'rails_helper'

RSpec.describe League, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
end
