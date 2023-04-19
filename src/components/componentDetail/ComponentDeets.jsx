import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { Container, Card } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch.jsx';
import { LateralModal } from './ComponentModals.jsx';
import '../../css/details.css';
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
				{error && <div>{detaiError.toString()}</div>}
				{loanding && <div>Cargando ... </div>}
				{typeof items !== 'undefined' && (
					<>
						<div className='row'>
							<h1>{items.name}</h1>
						</div>
						<div className='card-container'>
							<div className='col-2'>
								<LateralModal
									data={{
										haveImg: true,
										...items.Symbology,
										title: <h5> Symbología </h5>,
									}}
								/>
								<LateralModal
									data={{
										haveImg: false,
										title: <h5> Aplicaciones </h5>,
										description: items.aplication,
									}}
								/>
								<LateralModal
									data={{
										haveImg: false,
										title: <h5> ¿Qué es? </h5>,
										description: items.description,
									}}
								/>
							</div>
							<img src={image.url }className='img-detail'  />
							<Paper sx={{ p: 2 }}>
								{items.description}
							</Paper>

							
							
							
						</div>
					</>
				)}
			</Container>
		</>
	);
};

export default ComponentDetail;
