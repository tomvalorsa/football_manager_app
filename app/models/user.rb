class User < ActiveRecord::Base
  has_one :team
end
