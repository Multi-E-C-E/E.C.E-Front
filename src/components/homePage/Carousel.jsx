import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../../css/home.css';

const ControlledCarousel = () => {
	const [index, setIndex] = useState(3);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const carouselImages = [
		'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg',
		'https://wallpapers.com/images/hd/tree-on-green-lake-1519g7y2yexhnyvl.jpg',
		'https://wallup.net/wp-content/uploads/2014/10/nature/Yellow_Nature_Landscape_Picture.jpg',
	];

	return (
		<>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{carouselImages.map((image, i) => (
					<Carousel.Item key={i}>
						<img className='img-carousel' src={image} />
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
};

export default ControlledCarousel;
