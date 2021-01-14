Blorgh::Engine.routes.draw do
  resources :articles
  mount Blorgh::Engine => "/blorgh"
end
