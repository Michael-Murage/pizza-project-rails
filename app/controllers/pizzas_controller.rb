class PizzasController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
	def index
		render json: Pizza.all, status: :ok
	end

	def show
		piz = Pizza.find(params[:id])
		render json: piz, status: :ok
	end

	

	private

	def render_not_found
		render json: {error: "We could not find what you were looking for"}, status: :not_found
	end
end
