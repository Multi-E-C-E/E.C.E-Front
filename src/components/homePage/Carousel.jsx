import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../../css/home.css';

const ControlledCarousel = () => {
	const [index, setIndex] = useState(3);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className='img-carousel'
					src='https://media.istockphoto.com/id/646291934/photo/black-power-transistors.jpg?s=612x612&w=0&k=20&c=jmkG5DH3NFNxGGX4JLy_2TXhY1vPJIVrubKlWIXdYXE='
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='img-carousel'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdYAxWbberTU6v0YLZDtExp60wAl-aVuHxg&usqp=CAU'
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=' img-carousel'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBvUoUdBCRFAWiKcJrMD4B1LUn6tzQVbYpA&usqp=CAU'
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default ControlledCarousel;
