import { Suspense } from 'react';
import { handleClick } from '../commons/onHandleClick-jsx';
import { Link } from 'react-router-dom';
import { fetchData } from '../../network/fetchData.jsx';
import { Card, Container } from 'react-bootstrap';
import { TbInfoOctagon } from 'react-icons/tb';
import './../../css/dashboard.css';
const components = fetchData('item/all');
export const Dashboard = () => {
	const items = components.read();

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
				<div className='dash-eq-card-container'>
					<Card className='dash-eq-card'>
						<Link to='/tools' onClick={handleClick}>
							<Card.Img
								variant='top'
								className='img-qe-card'
								src='https://wallup.net/wp-content/uploads/2014/10/nature/Yellow_Nature_Landscape_Picture.jpg'
							/>
						</Link>

						<Card.Body className='card-eq'>
							<Card.Title>{<h5>equiposMedicion</h5>}</Card.Title>
							<Card.Text>
								{
									<h7>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Animi, magnam.
									</h7>
								}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</Container>
		</>
	);
};
