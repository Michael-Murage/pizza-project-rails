class RestaurantPizzasController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
	def index
		render json: RestaurantPizza.all, status: :ok
	end

	def show
		rest = find_rest
		render json: rest
	end

	def update
		rest = find_rest
		rest.update!(restaurant_pizza_params)
		render json: rest, status: :accepted
	end

	def create
		rest = RestaurantPizza.create!(restaurant_pizza_params)
		render json: rest, status: :created
	end

	def destroy
		rest = find_rest
		rest.destroy
		render json: {}, status: :accepted
	end

	private

	def render_not_found
		render json: {error: "Record not found"}
	end

	def restaurant_pizza_params
		params.permit(:price, :restaurant_id, :pizza_id)
	end

	def find_rest
		RestaurantPizza.find(params[:id])
	end
		
end
