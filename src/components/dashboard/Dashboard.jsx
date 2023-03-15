import React, { Suspense } from 'react';
import { fetchData } from '../../network/fetchData.jsx';
import { Card, Button, Container } from 'react-bootstrap';
import './../../css/dashboard.css';
const api = fetchData('item/all?type=Componente Electronico');
export const Dashboard = () => {
	const items = api.read();
	return (
		<>
			<Container>
				<div className='card-container'>
					<Suspense fallback={<div>Cargando ... </div>}>
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
					</Suspense>
				</div>
			</Container>
		</>
	);
};
