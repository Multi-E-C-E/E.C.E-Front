import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useFecth } from '../../network/useFetch';
import PropTypes from 'prop-types';

const ToolsList = props => {
	const { items } = useFecth('item/all?type=2');

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
ToolsList.propTypes = {
	enviar: PropTypes.func.isRequired,
};
export default ToolsList;
