class RestaurantShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :review, :address, :description
	has_many :pizzas, through: :restaurant_pizzas
end
