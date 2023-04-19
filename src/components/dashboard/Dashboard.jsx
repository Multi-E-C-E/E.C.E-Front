import { handleClick } from '../commons/onHandleClick.jsx';
import { Link } from 'react-router-dom';
import { useFecth } from '../../network/useFetch.jsx';
import { Card, Container, Alert } from 'react-bootstrap';
import { TbInfoOctagon } from 'react-icons/tb';
import './../../css/dashboard.css';
import { tools } from '../utils/utils.jsx';
import { ErrMessague } from '../errorPage/errorMessage.jsx';

export const Dashboard = () => {
	const { items, loanding, error, detaiError } = useFecth('item/all?type=1');
	console.log(error.toString());

	return (
		<>
			<Container>
				<div className='dash-card-container'>
					{error && (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								margin: 'auto',
							}}
						>
							
							<Card>
								<Card.Header>Error</Card.Header>
								<Card.Body>
									<Alert variant='danger'>
									<pre>{detaiError.toString()}</pre>
										<ErrMessague />
									</Alert>
								</Card.Body>
							</Card>
						</div>
					)}

					{loanding && <div>Cargando ... </div>}

					{items.map(item => (
						<Card className='dash-card' key={item.name}>
							<Link
								className='link-no-style card-title'
								to={`/component/${item.id_item}`}
								onClick={handleClick}
							>
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
							</Link>
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
