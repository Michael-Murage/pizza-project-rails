class RestaurantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
	def index
		render json: Restaurant.all, status: :ok
	end

	def show
		rest = Restaurant.find(params[:id])
		render json: rest, serializer: RestaurantShowSerializer, status: :ok
	end

	def update
		rest = Restaurant.find(params[:id])
		rest.update!(restaurant_params)
		render json: rest, status: :accepted
	end

	def create

	end

	def destroy
		rest = Restaurant.find(params[:id])
		rest.destroy
		render json: {}, status: :accepted
	end

	private

	def render_not_found
		render json: {error: "Restaurant not found"}
	end

	def restaurant_params
		params.permit(:name, :address, :review, :description)
	end
end
