class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :review, :address, :description, :review_summary
	
	def review_summary
		"#{self.object.review[0...60]}..."
	end
end
