Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :tree_houses, only: [:show, :index, :create]
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]

  end

  root "static_pages#root"
end
