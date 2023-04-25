import { Container } from 'react-bootstrap';
import ControlledCarousel from './Carousel';
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
		</>
	);
};
