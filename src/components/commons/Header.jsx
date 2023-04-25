import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import '../../css/float.css';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

export const Header = () => {
	const { pathname } = useLocation();
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
			</header>
			<Navbar className='nav-bar' variant='dark'>
				<Link to={'/'}>
					<img
						className='logo'
						src='https://drive.google.com/uc?export=view&id=1kGSAaS0SqQGyEj5F4EqGVhifCp8wg8W6'
					/>
				</Link>
				<Link to='/dashboard'>
					{pathname !== '/' && pathname !== '/dashboard' && (
						<AiOutlineHome className='btn-flotante' />
					)}
				</Link>
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
				
			</Navbar>
		</>
	);
};
