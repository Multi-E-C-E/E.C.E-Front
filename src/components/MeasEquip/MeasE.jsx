import { useState, useEffect } from 'react';
import { useFecth, useFecthAwait } from '../../network/useFetch';
import { Alert, Card, Carousel, Container } from 'react-bootstrap';
import { FaLongArrowAltDown } from 'react-icons/fa';
import TabAssets from './tabAssest';
import ToolsList from './ImgList';
import './../../css/mepd.css';
import { ErrMessague } from '../errorPage/errorMessage';

const MSE = () => {
	const { items, detaiError, error, loanding, setItems } =
		useFecth('item/detail/3');

	const [image, setImage] = useState({});
	const [video, setVideo] = useState({});
	const [asset3D, setAsset3D] = useState({});
	const [assets, setAssets] = useState([]);

	useEffect(() => {
		if (items.Assets) {
			setImage(findAsset(1));
			setVideo(findAsset(2));
			setAsset3D(findAsset(3));
		}
	}, [items]);

	const functionParent = async datos => {
		const { json } = await useFecthAwait(`item/detail/${datos}`);
		setItems(json);
		setAssets([]);
	};

	const findAsset = type => {
		const asset = items.Assets.find(
			asset => asset.TypeAsset.id_typeAsset === type
		);
		if (asset) assets.push(asset);
		return asset ?? {};
	};

	return (
		<>
			<Container>
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
				<h3 className='title-g'>
					Selecciona un equipo de medicion <FaLongArrowAltDown />{' '}
				</h3>
				<ToolsList enviar={functionParent} />

				<h1>{items.name}</h1>
				<div className='tools-items'>
					{assets.length > 0 && <TabAssets assets={assets} />}
					<p>{items.description}</p>
				</div>
				<hr />
			</Container>
		</>
	);
};

export default MSE;
