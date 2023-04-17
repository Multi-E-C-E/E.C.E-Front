import { Typography } from '@mui/material';
import { Tab, Tabs } from 'react-bootstrap';
import { FaCube, FaVideo } from 'react-icons/fa';
import { BsCardImage } from 'react-icons/bs';
import PropTypes from 'prop-types';
import M3D from '../commons/M3D';
import VideoComponent from './videoComponent';

const assetList = {
	1: {
		icon: <BsCardImage />,
		content: image => {
			return (
				<>
					<Typography variant='h4' align='center' gutterBottom>
						<h3 className='title-tool-video'>{image.name}</h3>
					</Typography>
					<img src={image.url} alt={image.name} className='tools-image' />;
				</>
			);
		},
	},
	2: {
		icon: <FaVideo />,
		content: video => {
			return <VideoComponent video={video} />;
		},
	},
	3: {
		icon: <FaCube />,
		content: asset3D => {
			return <M3D asset3D={asset3D} />;
		},
	},
};

const TabAssets = ({ assets }) => {
	return (
		<Tabs defaultActiveKey='tab1' className='title-tool-tab '>
			{assets.map(asset => (
				<Tab
					key={asset.TypeAsset.id_typeAsset}
					eventKey={`tab${asset.TypeAsset.id_typeAsset}`}
					title={assetList[asset.TypeAsset.id_typeAsset].icon}
				>
					{assetList[asset.TypeAsset.id_typeAsset].content(asset)}
				</Tab>
			))}
		</Tabs>
	);
};

TabAssets.propTypes = {
	assets: PropTypes.array.isRequired,
};

export default TabAssets;
