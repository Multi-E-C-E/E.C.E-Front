import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './../../css/home.css';

const cardTitle1 = "Card Title 1";
const cardSubtitle1 = "Card Subtitle 1";
const cardText1 = "Some quick example text to build on the card title and make up the bulk of the card's content.";

const cardTitle2 = "Card Title 2";
const cardSubtitle2 = "Card Subtitle 2";
const cardText2 = "Some quick example text to build on the card title and make up the bulk of the card's content.";

const cardTitle3 = "Card Title 3";
const cardSubtitle3 = "Card Subtitle 3";
const cardText3 = "Some quick example text to build on the card title and make up the bulk of the card's content.";

const cardTitle4 = "Card Title 4";
const cardSubtitle4 = "Card Subtitle 4";
const cardText4 = "Some quick example text to build on the card title and make up the bulk of the card's content.";

export const Info = () => {
	return (
		<Container>
			<div className='card-container'>
				<Card className='card'>
					<Card.Body>
						<Card.Title>{cardTitle1}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>{cardSubtitle1}</Card.Subtitle>
						<Card.Text>{cardText1}</Card.Text>
						<Card.Link href='#'>Card Link</Card.Link>
						<Card.Link href='#'>Another Link</Card.Link>
					</Card.Body>
				</Card>
				<Card className='card'>
					<Card.Body>
						<Card.Title>{cardTitle2}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>{cardSubtitle2}</Card.Subtitle>
						<Card.Text>{cardText2}</Card.Text>
						<Card.Link href='#'>Card Link</Card.Link>
						<Card.Link href='#'>Another Link</Card.Link>
					</Card.Body>
				</Card>
				<Card className='card'>
					<Card.Body>
						<Card.Title>{cardTitle3}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>{cardSubtitle3}</Card.Subtitle>
						<Card.Text>{cardText3}</Card.Text>
						<Card.Link href='#'>Card Link</Card.Link>
						<Card.Link href='#'>Another Link</Card.Link>
					</Card.Body>
				</Card>
				<Card className='card'>
					<Card.Body>
						<Card.Title>{cardTitle4}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>{cardSubtitle4}</Card.Subtitle>
						<Card.Text>{cardText4}</Card.Text>
						<Card.Link href='#'>Card Link</Card.Link>
						<Card.Link href='#'>Another Link</Card.Link>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
};
