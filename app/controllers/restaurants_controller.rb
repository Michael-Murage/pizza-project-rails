class RestaurantsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
	def index
		render json: Restaurant.all, status: :ok
	end

	def show
		rest = find_rest
		render json: rest, serializer: RestaurantShowSerializer, status: :ok
	end

	def update
		rest = find_rest
		rest.update!(restaurant_params)
		render json: rest, status: :accepted
	end

	def create
		rest = Restaurant.create!(restaurant_params)
		render json: rest, status: :created
	end

	def destroy
		rest = find_rest
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

	def find_rest
		Restaurant.find(params[:id])
	end
end
