import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';

// components
import ToolsList from './ImgList';
import { fetchData } from '../../network/fetchData';

const data = fetchData('item/detail/3');

const MSE = () => {
	// hacer peticion

	const [item, setItem] = useState(data.read());

	// inicializar variable
	const [image, setImage] = useState({});

	// asignar valores
	useEffect(() => {
		const temp = item.Assets.find(asset => asset.TypeAsset.id_typeAsset === 1);
		setImage(temp);
	}, [item]);

	// Funcion que recibe los el item selecionado
	const functionParent = async datos => {
		console.log('El padre recibio: ', datos);
		const res = await fetch(
			`http://localhost:3000/api/v1/item/detail/${datos}`
		);
		const json = await res.json();
		setItem(json);
	};

	// renderizar
	return (
		<>
			<Container fixed>
				<Typography variant='h2' align='center'>
					{item.name}
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
					<p>{item.description}</p>
				</Paper>
			</Container>
		</>
	);
};

export default MSE;
