import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useFecth } from '../../network/useFetch';

// Se podria usar botton base para que se active una funcion al presionar la imagen
// Creo que se puede hacer una peticion con su numero de id para traer los datos
const toolsList = props => {
	const { items } = useFecth('item/all?type=2');
	// const list = apiData.read();
	const enviarData = data => {
		props.enviar(data);
	};
	return (
		<>
			<ImageList sx={{ width: 300, height: 300 }} cols={1} rowHeight={150}>
				{items.map(image => {
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
