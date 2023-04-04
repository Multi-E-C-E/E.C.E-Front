import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { useFecth, useFecthAwait } from '../../network/useFetch';
import ToolsList from './ImgList';
import VideoComponent from './videoComponent';
import M3D from '../commons/M3D';
import './../../css/mepd.css';

const MSE = () => {
	const { items, detaiError, error, loanding, setItems } =
		useFecth('item/detail/3');

	const [image, setImage] = useState({});
	const [video, setVideo] = useState({});
	const [asset3D, setAsset3D] = useState({});

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
	};

	const findAsset = type => {
		const asset = items.Assets.find(
			asset => asset.TypeAsset.id_typeAsset === type
		);
		return asset ?? {};
	};

	return (
		<>
			{error && (
				<div>
					<pre>{detaiError.toString()}</pre>
					<h1>hola</h1>
				</div>
			)}
			{loanding && <div>Cargando ... </div>}

			{items.name}
			<ToolsList enviar={functionParent} />
			<img src={image.url} alt={image.name} style={{ width: '100%' }} />
			<p>{items.description}</p>
			{video.url && <VideoComponent video={video} />}
			{asset3D.url && <M3D asset3D={asset3D} />}
		</>
	);
};

export default MSE;
