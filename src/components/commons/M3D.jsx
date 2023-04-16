import { Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const M3D = ({ asset3D }) => {
	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' align='center' gutterBottom>
				<h3 className='title-tool-video'>{asset3D.name}</h3>
			</Typography>
			<div style={{ width: '100%', height: '50vh' }}>
				<iframe
					src={`https://sketchfab.com/models/${asset3D.url}/embed`}
					style={{ width: '100%', height: '50vh' }}
				></iframe>
			</div>
		</Container>
	);
};

M3D.propTypes = {
	asset3D: PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
};

export default M3D;
