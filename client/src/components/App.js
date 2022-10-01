import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import useGetData from '../hooks/getData';
import Home from './Home';
import Navbar from './Navbar';
import Restaurants from './Restaurants';
import SearchBar from './SearchBar';

function App() {
	const [summary, setSummary] = useState(true)
	const { data, err, load, setData } = useGetData("/pizzas")

	const swapReview = (state) => setSummary(state)

	return (
    <div>
			<BrowserRouter>
			<SearchBar/>
				<Routes>
					<Route path='/' element={<Home pizza={data} setPizza={setData}/>}/>
					<Route path='/restaurants' element={<Restaurants summary={summary} swapReview={swapReview}/>} />
				</Routes>
				<Navbar />
			</BrowserRouter>			
    </div>
  );
}

export default App;
