import { useState } from 'react';
import './../../css/home.css';
import b1 from './assets/board.png';
import b2 from './assets/board2.png';
import b3 from './assets/b3.png';
import d1 from './assets/diodo.png';
import {
	Container,
	Row,
	Col,
	Image,
	Carousel,
	CarouselItem,
} from 'react-bootstrap';

const ControlledCarousel = () => {
	const carouselImages = [b1, d1, b2, b3];

	return (
		<>
			<Container>
				<div className='contaner_carousl img-thumbnail'>
					<Carousel>
						{carouselImages.map((image, i) => (
							<CarouselItem key={i}>
								<Image
									className='img-thumbnail list_image'
									src={image}
									rounded
								/>
							</CarouselItem>
						))}
					</Carousel>
				</div>
			</Container>
		</>
	);
};

export default ControlledCarousel;
