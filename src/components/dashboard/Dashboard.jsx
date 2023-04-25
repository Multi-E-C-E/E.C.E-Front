import { handleClick } from '../commons/onHandleClick.jsx';
import { Link } from 'react-router-dom';
import { useFecth } from '../../network/useFetch.jsx';
import { Card, Container, Alert } from 'react-bootstrap';
import { Home } from './../homePage/Home.jsx';
import './styles/dashboard.css';
import './styles/images.css';
import { ErrMessague } from '../errorPage/errorMessage.jsx';
import { Options } from './Options.jsx';

export const Dashboard = () => {
	const { items, loanding, error, detaiError } = useFecth('item/all?type=1');
	console.log(error.toString());
	let load = false;

	const loadStaticData = () => {
		if (items.length > 0) {
			load = true;
		}
	};

	return (
		<>
			<div className='dash-home-container'>
			{loadStaticData()}
				{load && <p className='title_com'>Componentes electronicos</p>}
				<div className='dash-home-img-container'>
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
					{loadStaticData()}
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
			</div>

			<hr />
			{load && (
				<div>
					<p className='title_options'>Contenido de ayuda</p>
					<Container>
						<Options />
					</Container>

					<Home />
				</div>
			)}
		</>
	);
};
