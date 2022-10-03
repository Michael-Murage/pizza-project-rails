Rails.application.routes.draw do
  resources :restaurants
  resources :pizzas
	resources :restaurant_pizzas
	get '/pizza_only', to: 'pizza_only#index'
	get '/rest_only', to: 'rest_only#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
