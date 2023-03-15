import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import ControlledCarousel from './Carousel';
import { MdStart } from 'react-icons/md';
import { Info } from './Description';
import './../../css/home.css';

export const Home = () => {
	return (
		<>
			<ControlledCarousel />
			<Container>
				<Link to='/dashboard'>
					<MdStart className='icon' />
				</Link>
				<Info />
			</Container>
		</>
	);
};
