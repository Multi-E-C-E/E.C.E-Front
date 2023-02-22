import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Home from './components/Home';
import  Dashboard  from './components/Dashboard';

function App() {
	return (
		<>
			<Header />
			<div className='mt-5 appContainer'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/dashboar' element={<Dashboard />}></Route>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
