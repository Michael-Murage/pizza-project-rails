# PIZZA APP
<!-- Deployed link: https://pizza-project-rails.herokuapp.com -->

This is an app that manages pizzas, restaurants and relevant orders.

## User Abilities
For this app as per the time of writing, it has no form of authentication whatsoever and will be added very soon in future to limit what a user can do. Otherwise, a user can do anything now;

A user can:

* View, edit, delete pizza information and add a new pizza record
* View, edit, delete restaurant information and a new restaurant record
* View, edit, delete restaurant_pizza information and add a new record

<img src="public/images/image1.png" alt="screenshot of the app" width='600px' height='300px'>


<img src="public/images/image2.png" alt="screenshot of the app" width='600px' height='300px'>


<img src="public/images/image3.png" alt="screenshot of the app" width='600px' height='300px'>


<img src="public/images/image4.png" alt="screenshot of the app" width='600px' height='300px'>

## Local Setup (client and server side)
<i>The following setup presumes you have `npm`, `ruby` and `rails` installed.</i>

To run the server locally, clone the code and run the following commandsn in your terminal;
```
bundle install
rails db:migrate db:seed
rails s
```
This will set up the server, with some random seed data.

```
npm install --prefix client
npm start --prefix client
```
This will set up the client side.

## Server Side and Database Information
Model relations - The tables being worked on were the restaurants,
pizzas and restaurant_pizzas(which the client side calls orders) tables.

A restaurant `has_many` restaurant_pizzas
A restaurant `has_many` pizzas `through` restaurant_pizzas

A restaurant_pizza `belongs_to` restaurant
A restaurant_pizza `belongs_to` pizza

A pizza `has_many` restaurant_pizzas
A pizza `has_many` restaurants `through` restaurant_pizzas

## Stack
React

Ruby

Rails

SQLite3 and PostgreSQL

