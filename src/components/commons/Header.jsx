import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
	return (
		<>
			<header>
				<h5 className='h5-hd'>Redes sociales</h5>
			</header>
			<Navbar className='nav-bar' variant='dark'>
				<Link to={'/'}>
					<img
						className='logo'
						src='https://drive.google.com/uc?export=view&id=1kGSAaS0SqQGyEj5F4EqGVhifCp8wg8W6'
					/>
				</Link>
			</Navbar>
		</>
	);
};
