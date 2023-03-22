import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

export const Header = () => {
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
			<header>
				<h5 className='h5-hd'>Redes sociales</h5>
				<div className='icon-container'>
					{socialIcons.map((socialIcon, index) => (
						<a
							key={index}
							href={socialIcon.link}
							target='_blank'
							rel="noopener noreferrer"
							className='hd-icon'
						>
							{React.cloneElement(socialIcon.icon, {
								style: { height: '30px', width: 'auto' },
							})}
						</a>
					))}
				</div>
			</header>
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
