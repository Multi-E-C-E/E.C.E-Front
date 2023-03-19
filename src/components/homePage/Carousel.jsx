import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../../css/home.css';
import b1 from './assets/board.png';
import b2 from './assets/board2.png';
import b3 from './assets/b3.png';
import d1 from './assets/diodo.png';



const ControlledCarousel = () => {
	const [index, setIndex] = useState(3);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const carouselImages = [b1,d1, b2,b3];

	return (
		<>
			<div className='carousel-contaier'>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					{carouselImages.map((image, i) => (
						<Carousel.Item key={i}>
							<img className='img-carousel' src={image} />
						</Carousel.Item>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default ControlledCarousel;
