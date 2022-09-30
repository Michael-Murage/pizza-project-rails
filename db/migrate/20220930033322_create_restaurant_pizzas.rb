class CreateRestaurantPizzas < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurant_pizzas do |t|
      t.integer :restaurant_id
      t.integer :pizza_id

      t.timestamps
    end
  end
end
