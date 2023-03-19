import { Suspense } from 'react';
import { handleClick } from '../commons/onHandleClick.jsx';
import { Link } from 'react-router-dom';
import { fetchData } from '../../network/fetchData.jsx';
import { Card, Container } from 'react-bootstrap';
import { TbInfoOctagon } from 'react-icons/tb';
import './../../css/dashboard.css';
const components = fetchData('item/all');
export const Dashboard = () => {
	const items = components.read();

	const tools = [
		{
			name: 'Equipos de medicon',
			img_item: 'https://wallup.net/wp-content/uploads/2014/10/nature/Yellow_Nature_Landscape_Picture.jpg',
			desciption: { text: 'lorem impus odio, alsison equota' },
			path: '/tools',
		},
		{
			name: 'Practicas',
			img_item: 'https://placehold.it/200x200',
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
									src={item.img_item}
									alt={item.name}
								/>
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>{item.Type_item.name_type}</Card.Text>
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
									<Card.Title>
										<h6>{item.name}</h6>
									</Card.Title>
									<Card.Text>
										<h5>{item.desciption.text}</h5>
									</Card.Text>

									<TbInfoOctagon className='icon-info' />
								</Card.Body>
							</Link>
						</Card>
					))}
				</div>
			</Container>
		</>
	);
};
