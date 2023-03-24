import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { cardsHomeData } from '../utils/utils';

export const Info = () => {
	return (
		<Container>
			<div className=''>
				{cardsHomeData.map((cardData, index) => (
					<Card key={index}>
						{cardData.imgSrc && (
							<Card.Img variant='top' src={cardData.imgSrc} />
						)}
						<Card.Body>
							{cardData.title && <h2>{cardData.title}</h2>}
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
