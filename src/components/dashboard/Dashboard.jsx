import { handleClick } from '../commons/onHandleClick.jsx';
import { Link } from 'react-router-dom';
import { useFecth } from '../../network/useFetch.jsx';
import { Card, Container } from 'react-bootstrap';
import { TbInfoOctagon } from 'react-icons/tb';
import './../../css/dashboard.css';
import image from './assets/eq.png';
import image2 from './assets/img-practice.png';

export const Dashboard = () => {
	const { items, loanding, error, detaiError } = useFecth('item/all');
	console.log(error.toString());
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
					{error && 
						<div>
							<pre>{detaiError.toString()}</pre>
							<h1>hola</h1>
						</div>
					}

					{loanding && <div>Cargando ... </div>}
					{items.map(item => (
						<Card className='dash-card' key={item.name}>
							<Card.Img
								variant='top'
								className='img-card '
								src={item.preview_url}
								alt={item.name}
							/>
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								<Card.Text>{item.TypeItem.name_type}</Card.Text>
								<TbInfoOctagon className='icon-info' />
							</Card.Body>
						</Card>
					))}
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
									<Card.Title className='title-eq-card'>{item.name}</Card.Title>
									<Card.Text className='text-qe-card '>
										{item.desciption.text}
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
