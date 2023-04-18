import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { Container, Card } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch.jsx';
import { LateralModal } from './ComponentModals.jsx';
const ComponentDetail = () => {
	const { id } = useParams();
	const { items, detaiError, error, loanding } = useFecth('item/detail/' + id);

	// inicializar estados
	const [image, setImage] = useState({});


	// asignar los assets
	useEffect(() => {
		if (items.Assets) {
			setImage(findAsset(1));
		}
	}, [items]);



	const findAsset = type => {
		const asset = items.Assets.find(
			asset => asset.TypeAsset.id_typeAsset === type
		);
		return asset ?? {};
	};

	return (
		<>
			<Container className='text-center'>
				<h1>Details</h1>
				<h2>{items.name}</h2>				
				{error && <div>{detaiError.toString()}</div>}
				{loanding && <div>Cargando ... </div>}
				{typeof items !== 'undefined' && (
					<div className='row'>
						<div className='col-2'>
							<LateralModal
								data={{ haveImg: true, ...items.Symbology, title: 'Symbology' }}
							/>
							<LateralModal
								data={{
									haveImg: false,
									title: 'What can you do?',
									description: items.aplication,
								}}
							/>
							<LateralModal
								data={{
									haveImg: false,
									title: 'What is?',
									description: items.description,
								}}
							/>
						</div>
						<div className='col-6'>
							<br />
							<br />
							<Card.Img
								variant='top'
								src={image.url}
								alt={image.name}
							/>
						</div>
						<div className='col-3'>
							<Paper sx={{ p: 2 }}>
								<h3>Descripcion</h3>
								<p>{items.description}</p>
							</Paper>
						</div>
					</div>
				)}
				<br /> <hr /> <br />
				<Link to='/practice'>
					<h5>Practicas</h5>
				</Link>
			</Container>
		</>
	);
};

export default ComponentDetail;
