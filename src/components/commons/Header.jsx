import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
	return (
		<>
			<Navbar className='nav-bar' variant='dark'>
				<Link to={'/'}>
					<img
						className='logo'
						src='https://drive.google.com/uc?export=view&id=1tw0vw4s1eH4g-FfFoF36eEoB0bX3CcHD'
					/>
				</Link>
			</Navbar>
		</>
	);
};
