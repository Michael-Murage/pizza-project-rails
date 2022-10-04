class Api::PizzasController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
	# rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
	def index
		render json: Pizza.all, status: :ok
	end

	def show
		piz = find_piz
		render json: piz, status: :ok
	end

	def create
		pizza = Pizza.create!(pizza_params)
		render json: pizza, status: :created
	end

	def update
		piz = find_piz
		piz.update!(pizza_params)
		render json: piz, status: :accepted
	end

	def destroy
		piz = find_piz
		piz.destroy
		render json: {}, status: :accepted
	end

	private

	def render_not_found
		render json: {error: "We could not find what you were looking for"}, status: :not_found
	end

	def pizza_params
		params.permit(:name, :ingredients, :image)
	end

	def find_piz
		Pizza.find(params[:id])
	end
end
