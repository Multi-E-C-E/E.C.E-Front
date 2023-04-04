import { Tabs, Tab } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import PropTypes from 'prop-types';

const ToolsList = props => {
	const { items, loanding } = useFecth('item/all?type=2');

	const enviarData = data => {
		props.enviar(data);
	};

	return (
		<>
			{' '}
			<div className='tab-container '>
				<Tabs defaultActiveKey='tab1' className='title-tool-tab '>
					{items.map(image => (
						<Tab
							key={image.id_item}
							eventKey={`tab${image.id_item}`}
							title={image.name}
							onClick={() => enviarData(image.id_item)}
						>
							<div className='tab-items'>
								<img
									src={image.preview_url}
									alt={image.name}
									className='image-tab'
								/>
								<p>
									{' '}
									<AiOutlineArrowLeft /> Selecciona la imagen para más detalles{' '}
								</p>
							</div>
						</Tab>
					))}
				</Tabs>
			</div>
		</>
	);
};

ToolsList.propTypes = {
	enviar: PropTypes.func.isRequired,
};

export default ToolsList;
