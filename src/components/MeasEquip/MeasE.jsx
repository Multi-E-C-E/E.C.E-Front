import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFecth, useFecthAwait } from '../../network/useFetch';
import { Carousel, Container } from 'react-bootstrap';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { MdKeyboardReturn } from 'react-icons/md';
import { handleClick } from '../commons/onHandleClick';
import TabAssets from './tabAssest';
import ToolsList from './ImgList';
import VideoComponent from './videoComponent';
import './../../css/mepd.css';

const MSE = () => {
	const { items, detaiError, error, loanding, setItems } =
		useFecth('item/detail/3');

	const [image, setImage] = useState({});
	const [video, setVideo] = useState({});
	const [asset3D, setAsset3D] = useState({});
	const [assets, setAssets] = useState([]);
	const location = useLocation();

	useEffect(() => {
		if (items.Assets) {
			setImage(findAsset(1));
			setVideo(findAsset(2));
			setAsset3D(findAsset(3));
		}
	}, [items]);

	const functionParent = async datos => {
		const { json } = await useFecthAwait(`item/detail/${datos}`);
		setItems(json);
		setAssets([]);
	};

	const findAsset = type => {
		const asset = items.Assets.find(
			asset => asset.TypeAsset.id_typeAsset === type
		);
		if (asset) assets.push(asset);
		return asset ?? {};
	};

	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<Container>
				{error && (
					<div>
						<pre>{detaiError.toString()}</pre>
						<h1>hola</h1>
					</div>
				)}
				{loanding && <div>Cargando ... </div>}
				<h3 className='title-g'>
					Selecciona un equipo de medicion <FaLongArrowAltDown />{' '}
				</h3>
				<ToolsList enviar={functionParent} />

				<div className="row align-items-center">
					<div className="col-3">
					<Link to={location.state?.from || '/dashboard'} onClick={handleClick}>
								<MdKeyboardReturn className='icon' />
							</Link> 
					</div>
					<div className="col-6">
						<h1>{items.name}</h1>
					</div>
				</div>
				<div className='tools-items'>
					{assets.length > 0 && <TabAssets assets={assets} />}
					<p>{items.description}</p>
				</div>
				<hr />
				<Carousel
					variant='dark'
					activeIndex={index}
					onSelect={handleSelect}
					interval={null}
				>
					<Carousel.Item>
						{video.url && <VideoComponent video={video} />}
					</Carousel.Item>

					<Carousel.Item>
						<h3 className='tools-image-title'> {items.name} </h3>
						<img src={image.url} alt={image.name} className='tools-image' />
					</Carousel.Item>
				</Carousel>
			</Container>
		</>
	);
};

export default MSE;
