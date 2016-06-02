Rails.application.routes.draw do

  resources :users, only: [:create, :new, :show]
  resources :bands
  resources :albums, :tracks, except: :index

  resource :session, only: [:create, :new, :destroy]

end
