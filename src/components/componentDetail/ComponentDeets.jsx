import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { Container } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch.jsx';
import { LateralModal } from './ComponentModals.jsx';
import { LateralModal3D } from './ComponentModals3D.jsx';
import '../../css/details.css';
const ComponentDetail = () => {
	const { id } = useParams();
	const { items, detaiError, error, loanding } = useFecth('item/detail/' + id);

	// inicializar estados
	const [image, setImage] = useState({});
	const [asset3D, setAsset3D] = useState({});

	// asignar los assets
	useEffect(() => {
		if (items.Assets) {
			setImage(findAsset(1));
			setAsset3D(findAsset(3));
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
								{asset3D.url && <LateralModal3D data={asset3D} />}
							</div>
							<img src={image.url} className='img-detail' />
							<Paper sx={{ p: 2 }}>{items.description}</Paper>
						</div>
					</>
				)}
			</Container>
		</>
	);
};

export default ComponentDetail;
