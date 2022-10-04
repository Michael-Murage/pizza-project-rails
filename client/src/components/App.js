// import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import EditPizza from './EditPizza';
import EditRestaurant from './EditRestaurant';
import Home from './Home';
import Record from './Record';
import Navbar from './Navbar';
import NewPizza from './NewPizza';
import NewRestaurant from './NewRestaurant';
import PizzaView from './PizzaView';
import RestaurantPizzas from './RestaurantPizzas';
import Restaurants from './Restaurants';
import RestaurantView from './RestaurantView';
import SearchBar from './SearchBar';
import NewRecord from './NewRecord';

function App() {

	return (
    <div>
			<BrowserRouter>
			<SearchBar/>
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/restaurant' element={<Restaurants />} />
					<Route path='/restaurant/:id' element={<RestaurantView />}/>
					<Route path='/pizza/:id' element={<PizzaView/>}/>
					<Route path='/restaurant/:id/edit' element={<EditRestaurant/>}/>
					<Route path='/pizza/:id/edit' element={<EditPizza/>}/>
					<Route path='/new-pizza' element={<NewPizza/>}/>
					<Route path='/new-restaurant' element={<NewRestaurant/>}/>
					<Route path='/record' element={<RestaurantPizzas/>}/>
					<Route path='/record/:id' element={<Record />}/>
					<Route path='/newrecord' element={<NewRecord />}/>
				</Routes>
				<Navbar />
			</BrowserRouter>			
    </div>
  );
}

export default App;
