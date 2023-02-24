import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../../css/home.css';

const ControlledCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className='d-block  img-carousel'
					src='https://media.istockphoto.com/id/646291934/photo/black-power-transistors.jpg?s=612x612&w=0&k=20&c=jmkG5DH3NFNxGGX4JLy_2TXhY1vPJIVrubKlWIXdYXE='
					alt='First slide'
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block img-carousel'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdYAxWbberTU6v0YLZDtExp60wAl-aVuHxg&usqp=CAU'
					alt='Second slide'
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block img-carousel'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBvUoUdBCRFAWiKcJrMD4B1LUn6tzQVbYpA&usqp=CAU'
					alt='Third slide'
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default ControlledCarousel;
