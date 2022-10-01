# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require '../../client/assets'
flavour = %w!Cheese Veggie Pepperoni Meat Margherita BBQ Hawaiian Buffalo Supreme The-Works!
restaurant = ['Ecco Pizzeria', 'Couch Tomato', 'Angie\'s Pizza', 'Palio\'s Pizza Cafe', 'Pizza Capri',
	'Oz Pizza', 'Pizza Guys', 'Kentucky Fried Chicken', 'Mellow Mushroom', 'Verdugo Pizza']

image = [
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_623344781-768x511.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132-768x506.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074-768x512.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_548340295-768x511.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_347791016-768x512.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413-768x512.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_313437680-768x746.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/Buffalo-Chicken-Pizza-1-768x512.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_244706695-768x512.jpg.webp',
	'https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_84904876-768x540.jpg.webp'
]

# image = [
	# '/client/assets/cheese.jpeg'
	# '/assets/veggie.jpeg',
	# '/assets/pepperoni.jpeg',
	# '/assets/meat.jpeg',
	# '/assets/margherita.jpeg',
	# '/assets/bbq.jpeg',
	# '/assets/hawaiian.jpeg',
	# '/assets/buffalo.jpeg',
	# '/assets/supreme.jpeg',
	# '/assets/the-works.jpeg'
# ]

for i in 0...10 do
	Pizza.create!(name: flavour[i], image: image[i])
	Restaurant.create!(
		name: restaurant[i], 
		review: Faker::Restaurant.review, 
		description: Faker::Restaurant.description, 
		address: Faker::Address.full_address
	)
end

for i in 0..5 do
	for j in 0..5 do
		RestaurantPizza.create(pizza_id: i, restaurant_id: j)
	end
end