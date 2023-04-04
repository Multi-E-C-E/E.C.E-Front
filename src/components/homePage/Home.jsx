import { Link } from 'react-router-dom';
import { handleClick } from '../commons/onHandleClick.jsx';
import { Container } from 'react-bootstrap';
import ControlledCarousel from './Carousel';
import { MdStart } from 'react-icons/md';
import { Info } from './Description';

export const Home = () => {
	return (
		<>
			<div className='home-container'>
				<ControlledCarousel />
				<Container>
					<Info />
				</Container>
			</div>
			<Link to='/dashboard' onClick={handleClick}>
				<h5 className='text-home'>Click aqui para ir al dashboard</h5>
				<MdStart className='icon' />
			</Link>
		</>
	);
};
