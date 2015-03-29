User.destroy_all
League.destroy_all
Team.destroy_all
Player.destroy_all
Match.destroy_all
Tactic.destroy_all

admin = User.create(:username => 'admin', :email => 'admin@admin.com', :password => 'admin', :password_confirmation => 'admin', :is_admin => true)

u1 = User.create(:username => 'tom', :email => 'tom@tom.com', :password => 'tom', :password_confirmation => 'tom')

# l1 = League.create(:name => 'Premier League', :nation => 'England', :size => 2)

# t1 = Team.create(:league_id => l1.id, :user_id => u1.id, :name => 'Arsenal', :overall_rating => 90, :league_position => nil, :total_value => 100_000_000, :bank_balance => 50_000_000, :form_rating => 50)

# p1 = Player.create(:team_id => t1.id, :first_name => 'Mesut', :last_name => 'Ozil', :age => 27, :nationality => 'German', :attack_rating => 91, :defence_rating => 51, :value => 30_000_000, :position => 'midfielder', :goals => 0, :assists => 0, :yellow_cards => 0, :red_cards => 0, :mom_count => 0)

# t2 = Team.create(:league_id => l1.id, :user_id => admin.id, :name => 'Man Utd', :overall_rating => 90, :league_position => nil, :total_value => 100_000_000, :bank_balance => 50_000_000, :form_rating => 50)

# p2 = Player.create(:team_id => t2.id, :first_name => 'Wayne', :last_name => 'Rooney', :age => 27, :nationality => 'English', :attack_rating => 91, :defence_rating => 51, :value => 30_000_000, :position => 'midfielder', :goals => 0, :assists => 0, :yellow_cards => 0, :red_cards => 0, :mom_count => 0)

# tac1 = Tactic.create(:team_id => t1.id, :formation => '4-4-2', :tempo => 'balanced', :playing_style => 'balanced', :passing => 'balanced', :tackling => 'balanced')

# tac2 = Tactic.create(:team_id => t2.id, :formation => '4-4-2', :tempo => 'balanced', :playing_style => 'balanced', :passing => 'balanced', :tackling => 'balanced')

# m1 = Match.create(:league_id => l1.id, :home_team_id => t1.id, :away_team_id => t2.id)
# m2 = Match.create(:league_id => l1.id, :home_team_id => t2.id, :away_team_id => t1.id)

# t1.matches << m1
# t1.matches << m2
# t2.matches << m1
# t2.matches << m2
