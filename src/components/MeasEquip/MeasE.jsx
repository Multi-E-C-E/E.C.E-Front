import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';

// components
import ToolsList from './ImgList';
import VideoComponent from './videoComponent';
// import videoComponent from './videoComponent';
import { useFecth, useFecthAwait } from '../../network/useFetch';

const MSE = () => {
	// hacer peticion inicial
	const { items, detaiError, error, loanding, setItems } =
		useFecth('item/detail/3');

	// inicializar estados
	const [image, setImage] = useState({});
	const [video, setVideo] = useState({});

	// asignar los assets
	useEffect(() => {
		if (items.Assets) {
			setImage(findAsset(1));
			setVideo(findAsset(2));
		}
	}, [items]);

	// Funcion que recibe los el item selecionado
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

	// renderizar
	return (
		<>
			<Container fixed>
				{error && (
					<div>
						<pre>{detaiError.toString()}</pre>
						<h1>hola</h1>
					</div>
				)}

				{loanding && <div>Cargando ... </div>}
				<Typography variant='h2' align='center'>
					{items.name}
				</Typography>
				<Grid container alignItems={'center'}>
					<Grid item xs={12} sm={4} md={6} lg={4} xl={4}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<ToolsList enviar={functionParent} />
						</Box>
					</Grid>
					<Grid item xs={12} sm={8} md={6} lg={8} xl={8}>
						<Container maxWidth='sm'>
							<img src={image.url} alt={image.name} style={{ width: '100%' }} />
						</Container>
					</Grid>
				</Grid>
				<Paper sx={{ p: 2 }}>
					<h3>Descripcion</h3>
					<p>{items.description}</p>
				</Paper>
				{video.url && <VideoComponent video={video} />}
			</Container>
		</>
	);
};

export default MSE;
