Rails.application.routes.draw do

  resources :users, only: [:create, :new, :show]

  resources :bands do
    resources :albums, except: :index do
      resources :tracks, except: :index do
        resources :notes
      end
    end
  end

  resource :session, only: [:create, :new, :destroy]
end
