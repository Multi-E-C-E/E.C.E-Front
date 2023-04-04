import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useFecth } from '../../network/useFetch';
import PropTypes from 'prop-types';

const ToolsList = props => {
	const { items } = useFecth('item/all?type=2');

	const enviarData = data => {
		props.enviar(data);
	};
	return (
		<>
			{items.map(items => (
				<div key={items.id_item} onClick={() => enviarData(items.id_item)}>
					<img
						src={items.preview_url}
						alt={items.name}
						style={{ objectFit: 'cover', height: 50 }}
					/>
					title={items.name}
				</div>
			))}
		</>
	);
};
ToolsList.propTypes = {
	enviar: PropTypes.func.isRequired,
};
export default ToolsList;
