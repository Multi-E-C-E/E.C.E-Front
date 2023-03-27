import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { cardsHomeData } from '../utils/utils';

export const Info = () => {
	return (
		<Container>
			<div className='card-home-container'>
				{cardsHomeData.map((cardData, index) => (
					<Card
						className={
							cardData.imgSrc ? 'home-card card-with-image' : 'home-card'
						}
						style={cardData.imgSrc ? { borderColor: 'white' } : {}}
						key={index}
					>
						{cardData.imgSrc && (
							<Card.Img
								className='card-home-img'
								variant='top'
								src={cardData.imgSrc}
							/>
						)}
						<Card.Body>
							{cardData.title && <h2>{cardData.title}</h2>}
							{cardData.title2 && <h3>{cardData.title2}</h3>}
							<h4>
								{Array.isArray(cardData.text)
									? cardData.text.map((text, index) => (
											<li key={index}>{text}</li>
									  ))
									: cardData.text}
							</h4>
						</Card.Body>
					</Card>
				))}
			</div>
		</Container>
	);
};
