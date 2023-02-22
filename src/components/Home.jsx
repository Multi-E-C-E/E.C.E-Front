import { Link } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom';

const Home = () => {
	return (
		<Container>
			<h5>Hello Home</h5>
			<ul>
				<li>
					<Link to='/dashboar'>aqui habra una imagen</Link>
				</li>
			</ul>
		</Container>
	);
};

export default Home;
