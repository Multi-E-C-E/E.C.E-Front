import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'

import Navbar from 'react-bootstrap/Navbar';
import '../../css/float.css'

export const Header = () => {
	const { pathname } = useLocation();
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
				<Link to='/dashboard' >
					{ (pathname !== '/' && pathname !== '/dashboard') && <AiOutlineHome className='btn-flotante'  /> }
        		</Link>
			</Navbar>
		</>
	);
};
