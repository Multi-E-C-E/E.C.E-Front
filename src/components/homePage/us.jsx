import './styles/us.css';
import { BiHelpCircle, BiXCircle } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from 'react';

import { data } from '../utils/utils';
export const UsInfo = () => {
	const [isClipPathActive, setIsClipPathActive] = useState(false);
	const handleClick = () => {
		setIsClipPathActive(!isClipPathActive);
	};
	const setIconListener = () => {
		if (!isClipPathActive) {
			return <BiHelpCircle onClick={handleClick} className='icon_help' />;
		} else {
			return <BiXCircle onClick={handleClick} className='icon_help_dark' />;
		}
	};

	return (
		<>
			{setIconListener()}

			<div className={`main_container ${isClipPathActive ? 'active' : ''}`}>
				<div className='container about_container'>
					<div className='about_us'>
						<div className=' about_conten_us '>
							<li className='list-group-item us_text '>¿Quiénes somos?</li>
							<p className='list-group-item us_text'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. A.
							</p>
						</div>

						<li className='list-group-item t us_text'>Contacto</li>
						<p className='list-group-item text-justify us_text'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. A.
						</p>
					</div>

					<div className='about_page'>
						<div className='about_conten'>
							{data.map((item, index) => (
								<>
									{' '}
									<div className='cdcd_2'>
										
									<h4 className='us_text'>{item.welcome}</h4>
									
									<h4 className='us_text'>{item.title}</h4>
								
								
									<h4 className='us_text'>{item.title2}</h4>
										
									</div>
									<div className='cdcd'>
										<Card className='card-container ' key={index}>
											<ListGroup>
												{item.text.map((textItem, textIndex) => (
													<ListGroup.Item key={textIndex} className='border-0'>
														<h5 className='us_text'>*{textItem}</h5>
													</ListGroup.Item>
												))}
											</ListGroup>
										</Card>{' '}
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
