import { Link } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';
import ControlledCarousel from './Carousel';

const Home = () => {
	return (
		<>
			<Container>
				
				<ul>
					<li>
						<Link to='/dashboard'>aqui habra una imagen</Link>
					</li>
				</ul>
				<ControlledCarousel />
			</Container>
		</>
	);
};

export default Home;
