import './styles/us.css';
import { BiHelpCircle, BiXCircle } from 'react-icons/bi';
import { useState } from 'react';
export const UsInfo = () => {
	const [isClipPathActive, setIsClipPathActive] = useState(false);
	const handleClick = () => {
		setIsClipPathActive(!isClipPathActive);
	};
	const setIconListener = () => {
		if (!isClipPathActive) {
			return <BiHelpCircle onClick={handleClick} className='icon_help' />;
		} else {
			return <BiXCircle onClick={handleClick} className='icon_help' />;
		}
	};

	return (
		<>
			{setIconListener()}

			<div className={`main_container ${isClipPathActive ? 'active' : ''}`}>

				<div className='container about_container'>
					<div className='about_us'>
						<ul className='list-group-item '>
							<li className='list-group-item '>An item</li>
							<li className='list-group-item'>A second item</li>
							<li className='list-group-item'>A third item</li>
							<li className='list-group-item'>A fourth item</li>
							<li className='list-group-item'>And a fifth one</li>
						</ul>
					</div>

					<div className='about_page'>
						<div className="about_conten">
						<li className='list-group-item '>An item</li>
						<li className='list-group-item'>A second item</li>
						<li className='list-group-item'>A third item</li>
						<li className='list-group-item'>A fourth item</li>
						<li className='list-group-item'>And a fifth one</li>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
