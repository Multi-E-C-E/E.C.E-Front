// imageList
import { Suspense } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
// import { ImageList, ImageListItem,ImageListItemBar } from '@material-ui/core';
import { fetchData } from '../../network/fetchData';

const apiData = fetchData('item/all');

// Se podria usar botton base para que se active una funcion al presionar la imagen
// Creo que se puede hacer una peticion con su numero de id para traer los datos
const toolsList = props => {
	const list = apiData.read();
	const enviarData = data => {
		props.enviar(data);
	};
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}></Suspense>
			<ImageList sx={{ width: 300, height: 300 }} cols={1} rowHeight={150}>
				{list.map(image => {
					return (
						<ImageListItem
							key={image.id_item}
							onClick={() => enviarData(image.id_item)}
						>
							<img
								src={image.preview_url}
								alt={image.name}
								style={{ objectFit: 'cover', height: 150 }}
							/>
							<ImageListItemBar title={image.name} />
						</ImageListItem>
					);
				})}
			</ImageList>
		</>
	);
};

export default toolsList;

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
	},
	{
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
	},
	{
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
	},
	{
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
	},
	{
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
	},
	{
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
	},
	{
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
	},
	{
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
	},
	{
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
	},
	{
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
	},
];
