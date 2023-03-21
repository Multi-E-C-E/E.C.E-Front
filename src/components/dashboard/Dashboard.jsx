import { Suspense } from 'react';
import { handleClick } from '../commons/onHandleClick.jsx';
import { Link } from 'react-router-dom';
import { fetchData } from '../../network/fetchData.jsx';
import { Card, Container } from 'react-bootstrap';
import { TbInfoOctagon } from 'react-icons/tb';
import './../../css/dashboard.css';
import image from './assets/eq.png';
import image2 from './assets/img-practice.png';

const components = fetchData('item/all?type=1');
export const Dashboard = () => {
	try {
		const items = components.read();
		const tools = [
			{
				name: 'Equipos de medicon',
				img_item: image,
				desciption: { text: 'lorem impus odio, alsison equota' },
				path: '/tools',
			},
			{
				name: 'Practicas',
				img_item: image2,
				desciption: { text: 'lorem impus odio' },
				path: '/practice',
			},
			// ...
		];

		return (
			<>
				<Container>
					<div className='dash-card-container'>
						<Suspense fallback={<div>Cargando ... </div>}>
							{items.map(item => (
								<Card className='dash-card' key={item.name}>
									<Card.Img
										variant='top'
										className='img-card '
										src={item.preview}
										alt={item.name}
									/>
									<Card.Body>
										<Card.Title>{item.name}</Card.Title>
										<Card.Text>{item.TypeItem.name_type}</Card.Text>
										<TbInfoOctagon className='icon-info' />
									</Card.Body>
								</Card>
							))}
						</Suspense>
					</div>
					<hr />
					<div className='dash-eq-card-container'>
						{tools.map(item => (
							<Card className='dash-eq-card' key={item.name}>
								<Link
									className='link-no-style'
									to={item.path}
									onClick={handleClick}
								>
									<Card.Img
										variant='top'
										className='img-qe-card'
										src={item.img_item}
										alt={item.name}
									/>
									<Card.Body>
										<Card.Title>{item.name}</Card.Title>
										<Card.Text>{item.desciption.text}</Card.Text>

										<TbInfoOctagon className='icon-info' />
									</Card.Body>
								</Link>
							</Card>
						))}
					</div>
				</Container>
			</>
		);
	} catch (error) {
		return <div>Error: No hay conección con la API</div>;
	}
};
