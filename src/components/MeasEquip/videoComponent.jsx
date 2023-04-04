import { Typography, Grid, Paper, Container } from '@mui/material';
import PropTypes from 'prop-types';

const VideoComponent = ({ video }) => {
	console.log(video);
	return (
		<>
			<Container>
				<Typography variant='h4' align='center' gutterBottom>
					{video.name}
				</Typography>
				<Grid container justifyContent='center'>
					<Grid item xs={12} sm={10} md={8}>
						<Paper sx={{ p: 2 }}>
							<iframe
								width='100%'
								height='400'
								src={`https://www.youtube.com/embed/${video.url}`}
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							/>
						</Paper>
					</Grid>
				</Grid>
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
