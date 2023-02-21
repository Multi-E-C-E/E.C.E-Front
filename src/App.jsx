import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<>
			<Header />
			<Container className='mt-5 appContainer'>hola</Container>
			
		</>
	);
}

export default App;
