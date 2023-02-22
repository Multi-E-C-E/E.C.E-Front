import Navbar from 'react-bootstrap/Navbar';

function Header() {
	return (
		<>
			<Navbar className='nav-bar' variant='dark'>
				<Navbar.Brand href='#home'>
					<img
						src='https://plataformaeducativa.upqroo.edu.mx/pluginfile.php/1/theme_lambda/logo/1672677068/upqroo_logo.png'
						width='200'
						className='logo d-inline-block align-top'
					/>
				</Navbar.Brand>
			</Navbar>
		</>
	);
}

export default Header;
