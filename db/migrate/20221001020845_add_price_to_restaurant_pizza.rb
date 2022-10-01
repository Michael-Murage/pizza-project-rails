class AddPriceToRestaurantPizza < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurant_pizzas, :price, :integer
  end
end
