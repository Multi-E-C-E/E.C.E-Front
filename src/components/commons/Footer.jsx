import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

export const Footer = () => {
	const socialIcons = [
		{ icon: <BsFacebook />, link: 'https://www.facebook.com/upqroo' },
		{ icon: <BsTwitter />, link: 'https://twitter.com/UPQROO' },
		{ icon: <BsInstagram />, link: 'https://www.instagram.com/up_qroo/' },
		{
			icon: <BsYoutube />,
			link: 'https://www.youtube.com/channel/UCTQ6vM_-1DQAVwjvei0ns0Q',
		},
	];
	return (
		<>
			<Navbar className=' footer'>
				<Container>
					<Row>
						<Col md='6'>
							<p>&copy; ECE.</p>
						</Col>
						<Col md='6' className='text-md-end'>
							<p>
								Made with{' '}
								<span role='img' aria-label='love'>
									❤️
								</span>{' '}
								by Yo
							</p>
						</Col>
					</Row>
				</Container>
				<Navbar.Brand href='#home'></Navbar.Brand>
				<div className='icon-container'>
					{socialIcons.map((socialIcon, index) => (
						<a
							key={index}
							href={socialIcon.link}
							target='_blank'
							rel='noopener noreferrer'
							className='hd-icon'
						>
							{React.cloneElement(socialIcon.icon, {
								style: { height: '40px', width: 'auto' },
							})}
						</a>
					))}
				</div>

				<img
					className='logo-2'
					src='
						https://drive.google.com/uc?export=view&id=1gZCH2UgnWcrUfs3fB2cCCepilMAMTJix'
				/>
			</Navbar>
		</>
	);
};
