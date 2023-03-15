import React from 'react';
import { useFecth } from '../../network/useFecth.jsx';
import { Card, Button, Container } from 'react-bootstrap';
import './../../css/dashboard.css';

export const Dashboard = () => {
	const { items } = useFecth('item/all?type=Componente Electronico');

	return (
		<>
			<Container>
				<div className='card-container'>
					{items.map(item => (
						<Card className='card' key={item.name}>
							<Card.Img
								variant='top'
								className='img-card'
								src={item.img_item}
								alt={item.name}
							/>
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								<Card.Text>{item.Type_item.name_type}</Card.Text>
								<Button variant='primary'>Ver detalles</Button>
							</Card.Body>
						</Card>
					))}
				</div>
			</Container>
		</>
	);
};
