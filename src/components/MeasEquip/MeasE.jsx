// components
import ToolsList from './ImgList';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';

const MSE = () => {
	return (
		<>
			<Container fixed>
				<Typography variant='h2' align='center'>
					Multimetro
				</Typography>

				{/* <Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ToolsList />
					<Container maxWidth='sm'>
						<img
							src='https://www.cedesa.com.mx/imagenes/productos/1/lightbox/Fluke_27-II.jpg'
							style={{ width: '100%' }}
						/>
					</Container>
				</Box> */}
				<Grid container alignItems={'center'}>
					<Grid item xs={12} sm={4} md={6} lg={4} xl={4}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<ToolsList />
						</Box>
					</Grid>
					<Grid item xs={12} sm={8} md={6} lg={8} xl={8}>
						<Container maxWidth='sm'>
							<img
								src='https://www.cedesa.com.mx/imagenes/productos/1/lightbox/Fluke_27-II.jpg'
								style={{ width: '100%' }}
							/>
						</Container>
					</Grid>
				</Grid>
				<Paper sx={{ p: 2 }}>
					<h3>Descripcion</h3>
					<p>
						Es un hecho establecido hace demasiado tiempo que un lector se
						distraerá con el contenido del texto de un sitio mientras que mira
						su diseño. El punto de usar Lorem Ipsum es que tiene una
						distribución más o menos normal de las letras, al contrario de usar
						textos como por ejemplo Contenido aquí, contenido aquí. Estos textos
						hacen parecerlo un español que se puede leer. Muchos paquetes de
						autoedición y editores de páginas web usan el Lorem Ipsum como su
						texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar
						por resultado muchos sitios web que usan este texto si se encuentran
						en estado de desarrollo. Muchas versiones han evolucionado a través
						de los años, algunas veces por accidente, otras veces a propósito
						(por ejemplo insertándole humor y cosas por el estilo).
					</p>
				</Paper>
			</Container>
		</>
	);
};

export default MSE;
