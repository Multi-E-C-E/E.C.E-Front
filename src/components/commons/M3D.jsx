import { Container } from '@mui/material';

const m3D = ({ asset3D }) => {
	return (
		<Container maxWidth='sm'>
			<div style={{ width: '100%', height: '50vh' }}>
				<iframe
					src={`https://sketchfab.com/models/${asset3D.url}/embed`}
					style={{ width: '100%', height: '50vh' }}
				></iframe>
			</div>
		</Container>
	);
};

export default m3D;
