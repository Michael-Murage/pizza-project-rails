class RestaurantPizza < ApplicationRecord
	belongs_to :pizza
	belongs_to :restaurant
	validates :price, numericality: {greater_than: 0}
	validates :price, numericality: {less_than: 31}
end
