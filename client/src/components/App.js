import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

function App() {
	const [none, setNone] = useState(false)
	const [pizza, setPizza] = useState([])

	useEffect(()=>{
		(async()=>{
			let res = await fetch('/pizzas')
			try {
				let json = await res.json()
				setPizza(json)
			} catch (error) {
				console.log(error);
			}
		})()
	}, [])


  return (
    <div>
			<BrowserRouter>
			<SearchBar/>
				<Routes>
					<Route path='/' element={<Home pizza={pizza} setPizza={setPizza}/>}/>

				</Routes>
				<Navbar setNone={setNone}/>
			</BrowserRouter>			
    </div>
  );
}

export default App;
