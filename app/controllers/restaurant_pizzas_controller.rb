class RestaurantPizzasController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_422
	def index
		render json: RestaurantPizza.all.includes([:pizza, :restaurant]), status: :ok
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
		rest = RestaurantPizza.new(restaurant_pizza_params)
		Pizza.find(rest.pizza_id)
		Restaurant.find(rest.restaurant_id)
		rest.save!
		render json: rest.pizza, status: :created
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

	def render_422(invalid)
		render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
	end
		
end
