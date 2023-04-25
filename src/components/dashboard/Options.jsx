import { tools } from '../utils/utils.jsx';
import { Link } from 'react-router-dom';
import { handleClick } from '../commons/onHandleClick.jsx';
import { Container, Card, Row, Col } from 'react-bootstrap';

export const Options = () => {
	return (
		<Container>
			<Row>
				{tools.map(item => (
					<Col xs={12} md={6} lg={4} key={item.name}>
						<Card className='tools_container '>
							<Link
								className='tools_link'
								to={item.path}
								onClick={handleClick}
							>
								<Card.Img className='tools_image ' src={item.img_item} alt={item.name} />
								<Card.Body>
									<Card.Title className='card_title'>{item.name}</Card.Title>
									<Card.Text className='card_text'> {item.desciption.text} </Card.Text>
								</Card.Body>
							</Link>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};
