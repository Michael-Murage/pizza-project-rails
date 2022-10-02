Rails.application.routes.draw do
  resources :restaurants
  resources :pizzas
	resources :restaurant_pizzas
	# get '/app/assets', to: 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
