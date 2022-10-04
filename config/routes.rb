Rails.application.routes.draw do
	namespace :api do
  	resources :restaurants
  	resources :pizzas
		resources :restaurant_pizzas
		get '/pizza_only', to: 'pizza_only#index'
		get '/rest_only', to: 'rest_only#index'
	end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
