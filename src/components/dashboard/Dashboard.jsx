import { handleClick } from '../commons/onHandleClick.jsx';
import { Link, useLocation } from 'react-router-dom';
import { useFecth } from '../../network/useFetch.jsx';
import { Card, Container } from 'react-bootstrap';
import { TbInfoOctagon } from 'react-icons/tb';
import './../../css/dashboard.css';
import { tools } from '../utils/utils.jsx';

export const Dashboard = () => {
	const { items, loanding, error, detaiError } = useFecth('item/all?type=1');
	const location = useLocation().pathname;
	console.log(error.toString());

	return (
		<>
			<Container>
				<div className='dash-card-container'>
					{error && (
						<div>
							<pre>{detaiError.toString()}</pre>
							<h1>hola</h1>
						</div>
					)}

					{loanding && <div>Cargando ... </div>}
					{items.map(item => (
						<Card className='dash-card' key={item.name}>
							<Link
								className='link-no-style card-title'
								to={`/component/${item.id_item}`}
								state={{ from: location}}
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
								state={{ from: location}}
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
