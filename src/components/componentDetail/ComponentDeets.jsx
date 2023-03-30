import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import '../../css/home.css'
import {Container,Card } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch.jsx';
import { SymbologyModal } from './modals/SymbologyModal.jsx';
import { UsesModal } from './modals/UsesModal.jsx';
import { WhatIsModal } from './modals/WhatIsModal.jsx';

const ComponentDetail = ({ id }) => {
	
	const { items, detaiError, error, loanding } =
		useFecth(`item/detail/${2}`);

	// inicializar estados
	const [image, setImage] = useState({});
	const [video, setVideo] = useState({});
	const [asset3D, setAsset3D] = useState({});

	// asignar los assets
	useEffect(() => {
		if (items.Assets) {
			setImage(findAsset(1));
			setVideo(findAsset(2));
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
		<Container className="text-center">
			<div className="row"><h1>Details</h1></div>
			{error && <div>{detaiError.toString()}</div>}
			{loanding && <div>Cargando ... </div>}
			{typeof items !== 'undefined' && <div className="row">
				{console.log(items)}
				<div className="col-2">
					<SymbologyModal data={items.Symbology} />
					<br />
					<UsesModal data={{aplication: items.aplication}} />
					<br />
					<WhatIsModal data={{description: items.description}} />
				</div>
				<div className="col-6">
					<br />
					<br />
					<Card.Img
						variant='top'
						className='img-card '
						src={image.url}
						alt={image.name}
					/>
				</div>
				<div className="col-3">
					<Paper sx={{ p: 2 }}>
						<h3>Descripcion</h3>
						<p>{items.description}</p>
					</Paper>

				</div>
			</div>}
			<br /> <hr /> <br />
			<Link to='/practice'>
				<h5>Practicas</h5>
			</Link>
		</Container>
	);
};

export default ComponentDetail;
