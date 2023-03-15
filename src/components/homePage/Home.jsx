import { Link } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';
import ControlledCarousel from './Carousel';
import { MdStart } from 'react-icons/md';
import './../../css/home.css';

const Home = () => {
	return (
		<>
			<ControlledCarousel />
			<Container>
				<Link to='/dashboard'>
					<MdStart className='icon' />
				</Link>
			</Container>
		</>
	);
};

export default Home;
