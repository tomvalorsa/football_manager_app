# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  password_digest :text
#  is_admin        :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_image   :text
#

class User < ActiveRecord::Base
  has_one :team

  has_secure_password

  validates :username, :uniqueness => true, :presence => true
  validates :email, :uniqueness => true, :presence => true
end
