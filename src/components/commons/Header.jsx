import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
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
			<div className='nav-bar'>
				<div className='logo_container'>
					<Link to={'/'}>
						<img
							className='logo'
							src='https://upqroo.edu.mx/wp-content/uploads/2022/03/NuevoLogoUPQROO-PNGOFICIAL-300x120.png'
						/>
					</Link>
				</div>

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

					<Link to='/'>
						{pathname !== '/' && (
							<div>
								<AiFillHome className='btn-flotante' />
							</div>
						)}
					</Link>
				</div>
			</div>
		</>
	);
};
