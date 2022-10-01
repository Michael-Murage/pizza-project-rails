class PizzasController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
	# rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
	def index
		render json: Pizza.all, status: :ok
	end

	def show
		piz = Pizza.find(params[:id])
		render json: piz, status: :ok
	end

	def create
		pizza = Pizza.create!(pizza_params)
		pizza.image.attach(params[:image])
		render json: pizza, status: :created
	end

	private

	def render_not_found
		render json: {error: "We could not find what you were looking for"}, status: :not_found
	end

	def pizza_params
		params.permit(:name, :ingredients, :image)
	end

	
end
