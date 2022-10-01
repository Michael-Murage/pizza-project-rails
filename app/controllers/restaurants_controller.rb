class RestaurantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
	def index
		render json: Restaurant.all, status: :ok
	end

	def show
		rest = Restaurant.find(params[:id])
		render json: rest, serializer: RestaurantShowSerializer, status: :ok
	end

	private

	def render_not_found
		render json: {error: "Restaurant not found"}
	end
end
