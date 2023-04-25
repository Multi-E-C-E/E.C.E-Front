import { handleClick } from '../commons/onHandleClick.jsx';
import { Link } from 'react-router-dom';
import { useFecth } from '../../network/useFetch.jsx';
import { Card, Container, Alert } from 'react-bootstrap';
import { TbInfoOctagon } from 'react-icons/tb';
import './styles/dashboard.css';
import './styles/images.css';
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
						<div className='img_container' key={item.id_item}>
							<Link
								className='link-no-style card-title'
								to={`/component/${item.id_item}`}
								onClick={handleClick}
							>
								<img
									className='img_item'
									name={item.name}
									src={item.preview_url}
								/>
								<p>{item.name}</p>
							</Link>
						</div>
					))}
				</div>
				<hr />

				<div className='tools_container' key={name}>
					<div className='tools'>
						{tools.map(item => (
							<Link
								className='link-no-style'
								to={item.path}
								onClick={handleClick}
								key={item.name}
							>
								<div className='tools_link' key={name}>
									<img
										className='tools_image'
										src={item.img_item}
										alt={item.name}
									/>
									{item.name}
									<div className='title-g'>{item.desciption.text}</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</Container>
		</>
	);
};
