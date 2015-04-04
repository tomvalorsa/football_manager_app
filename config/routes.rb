Rails.application.routes.draw do
  root :to => 'pages#home'

  resources :users, :leagues, :teams, :players, :tactics, :matches

  # Backbone SPA home.
  get '/dashboard' => 'pages#index'

  get '/pick-league' => 'leagues#pick_league'

  get '/current-user-team-stats' => 'pages#current_team_stats'

  # Current user info:
  get '/info/current-user-team' => 'teams#user_info'

  post '/set-user-team' => 'teams#set_user_team'

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
