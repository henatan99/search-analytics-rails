Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "articles#index"

  resources :articles
  resources :searches, only: [:index, :new, :create]
  resources :ip_addresses, only: [:index, :new, :create, :show]

end
