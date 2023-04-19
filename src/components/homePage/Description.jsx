import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import { data } from './../utils/utils';

export const Info = () => {
	return (
		<>
			<div className='home-card'>
				<Container>
					{data.map((item, index) => (
						<Card className='card-container' key={index}>
							<Card.Img variant='top' src={item.imgSrc} />
							<Card.Body>
								<Card.Title>
									<h4>{item.title}</h4>
								</Card.Title>
							</Card.Body>

							<ListGroup>
								{item.text.map((textItem, textIndex) => (
									<ListGroup.Item key={textIndex} className='border-0'>
										<h5>*{textItem}</h5>
									</ListGroup.Item>
								))}
							</ListGroup>
						</Card>
					))}
				</Container>
			</div>
		</>
	);
};
