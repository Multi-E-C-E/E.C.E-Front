import { Tabs, Tab } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch';
import PropTypes from 'prop-types';
import './../../css/mepd.css'

const ToolsList = props => {
	const { items } = useFecth('item/all?type=2');

	const enviarData = data => {
		props.enviar(data);
	};

	return (
		<Tabs defaultActiveKey='tab1' className='title-tool'>
			{items.map(image => (
				<Tab
					key={image.id_item}
					eventKey={`tab${image.id_item}`}
					title={image.name}
					onClick={() => enviarData(image.id_item)}
				>
					<img
						src={image.preview_url}
						alt={image.name}
						style={{ objectFit: 'cover', height: 50 }}
					/>
				</Tab>
			))}
		</Tabs>
	);
};

ToolsList.propTypes = {
	enviar: PropTypes.func.isRequired,
};

export default ToolsList;
