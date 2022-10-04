class Api::RestOnlyController < ApplicationController

	def index
		restaurant = Restaurant.all
		render json: restaurant, status: :ok, each_serializer: RestOnlySerializer
	end
end
