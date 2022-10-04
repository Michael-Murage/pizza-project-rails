class Api::PizzaOnlyController < ApplicationController

	def index
		piz = Pizza.all
		# rest = Restaurant.all.only([:id, :name])
		render json: piz, status: :ok, each_serializer: PizzaOnlySerializer
	end
end
