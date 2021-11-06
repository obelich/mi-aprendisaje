Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #

  scope '(:locale)', locale: /es|en/ do
    namespace :v1, defaults: {format: 'json'} do

      resources :users, only: %i[create]

    end
  end

end
