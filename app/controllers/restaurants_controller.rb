class RestaurantsController < ApplicationController

	def index
		render json: Restaurant.all, status: :ok
	end
end
