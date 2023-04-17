import { Typography, Container } from '@mui/material';
import PropTypes from 'prop-types';

const VideoComponent = ({ video }) => {
	console.log(video);
	return (
		<>
			<Container>
				<Typography variant='h4' align='center' gutterBottom>
					<h3 className='title-tool-video'>{video.name}</h3>
				</Typography>
				<iframe
					src={`https://www.youtube.com/embed/${video.url}`}
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			</Container>
		</>
	);
};

VideoComponent.propTypes = {
	video: PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
};

export default VideoComponent;
