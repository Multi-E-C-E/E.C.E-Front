import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Home from './components/Home';

function App() {
	return (
		<>
			<Header />
			<div className='mt-5 appContainer'>
				<Home />
			</div>
			<Footer />
		</>
	);
}

export default App;
