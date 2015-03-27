Rails.application.routes.draw do
  root :to => 'pages#home'

  resources :users, :leagues, :teams, :players, :tactics, :matches

  # Backbone SPA home.
  get '/dashboard' => 'pages#index'

  # Session routes for user login.
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
