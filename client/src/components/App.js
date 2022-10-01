// import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import useGetData from '../hooks/getData';
import Home from './Home';
import Navbar from './Navbar';
import PizzaView from './PizzaView';
import Restaurants from './Restaurants';
import RestaurantView from './RestaurantView';
import SearchBar from './SearchBar';

function App() {
	const { data, err, load, setData } = useGetData("/pizzas")

	return (
    <div>
			<BrowserRouter>
			<SearchBar/>
				<Routes>
					<Route path='/' element={<Home pizza={data} setPizza={setData}/>}/>
					<Route path='/restaurants' element={<Restaurants />} />
					<Route path='/restaurant/:id' element={<RestaurantView />}/>
					<Route path='/pizza/:id' element={<PizzaView/>}/>
				</Routes>
				<Navbar />
			</BrowserRouter>			
    </div>
  );
}

export default App;
