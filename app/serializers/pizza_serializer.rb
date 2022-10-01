class PizzaSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :ingredients
end
