import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch.jsx';
import { LateralModal } from './ComponentModals.jsx';

import './styles/details.css';
import M3D from '../commons/M3D.jsx';
import { Paper } from '@mui/material';
const ComponentDetail = () => {
	const { id } = useParams();
	const { data, detaiError, error, loanding } = useFecth('item/detail/' + id);

	// inicializar estados
	const [image, setImage] = useState({});
	const [asset3D, setAsset3D] = useState({});

	// asignar los assets
	useEffect(() => {
		if (data.Assets) {
			setImage(findAsset(1));
			setAsset3D(findAsset(3));
		}
	}, [data]);

	const findAsset = type => {
		const asset = data.Assets.find(
			asset => asset.TypeAsset.id_typeAsset === type
		);
		return asset ?? {};
	};
	const [key, setKey] = useState('whatIs');

	return (
		<>
			<div>
				<h1>{data.name}</h1>
			</div>
			<Container>
				<div className='g-container'>
					{error && <div>{detaiError.toString()}</div>}
					{loanding && <div>Cargando ... </div>}
					{typeof data !== 'undefined' && (
						<>
							<div className='symbology_container'>
								<div className='symbology'>
									<LateralModal
										data={{
											haveImg: true,
											...data.Symbology,
											title: <p className='modal_title'> Simbología </p>,
										}}
									/>
								</div>
							</div>

							<div className='render_3d_container'>
								<div>
									<iframe
										className='render3D'
										src={`https://sketchfab.com/models/${asset3D.url}/embed`}
									></iframe>
								</div>
							</div>
						</>
					)}
					<div className='information_container'>
						<div className='information '>
							<Tabs activeKey={key} onSelect={k => setKey(k)}>
								<Tab eventKey='whatIs' title='Que es'>
									<div className='information'>{data.whatIs}</div>
								</Tab>
								<Tab eventKey='description' title='Descripcion'>
									<div className='information'>{data.description}</div>
								</Tab>
								<Tab eventKey='aplication' title='Applicacion'>
									<div className='information'>{data.aplication}</div>
								</Tab>
							</Tabs>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default ComponentDetail;
