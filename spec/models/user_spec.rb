# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  password_digest :text
#  is_admin        :boolean          default("false")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_image   :text
#

require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
