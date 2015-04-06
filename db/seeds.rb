User.destroy_all
League.destroy_all
Team.destroy_all
Player.destroy_all
Match.destroy_all
Tactic.destroy_all

admin = User.create(:username => 'admin', :email => 'admin@admin.com', :password => 'admin', :password_confirmation => 'admin', :is_admin => true)

u1 = User.create(:username => 'tom', :email => 'tom@tom.com', :password => 'tom', :password_confirmation => 'tom')
