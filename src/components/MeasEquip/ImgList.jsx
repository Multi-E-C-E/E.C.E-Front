import { Tabs, Tab } from 'react-bootstrap';
import { useFecth } from '../../network/useFetch';
import PropTypes from 'prop-types';

const ToolsList = props => {
	const { data, loanding } = useFecth('item/all?type=2');

	const enviarData = key => {
		props.enviar(key);
	};

	return (
		<>
			{' '}
			<div className='tab-container '>
				<Tabs
					defaultActiveKey='1'
					className='title-tool-tab'
					onSelect={enviarData}
				>
					{data.map(image => (
						<Tab
							key={image.id_item}
							eventKey={image.id_item}
							title={image.name}
						></Tab>
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
