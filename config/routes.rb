Rails.application.routes.draw do
  root :to => 'pages#home'

  resources :users, :leagues, :teams, :players, :tactics, :matches

  get '/how-to-play' => 'pages#how_to_play'

  # Backbone SPA home.
  get '/dashboard' => 'pages#index'

  # Setup links.
  get '/pick-league' => 'leagues#pick_league'
  post '/set-user-team' => 'teams#set_user_team'

  # Current user's team stats.
  get '/current-user-team-stats' => 'pages#current_team_stats'
  get '/user-match-data' => 'pages#user_match_data'

  # Admin site management links:
  get '/site-management' => 'pages#site_management'
  get '/manage-users' => 'pages#user_index'
  get '/manage-teams' => 'pages#team_index'
  get '/manage-leagues' => 'pages#league_index'

  # Session routes for user login.
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
