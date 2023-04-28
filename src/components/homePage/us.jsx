import './styles/us.css';
import { BiHelpCircle, BiXCircle } from 'react-icons/bi';
import { useState } from 'react';
import { Paper } from '@mui/material';
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
							<li className='list-group-item '>An item</li>
							<p className='list-group-item text-justify'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. A.
							</p>
						</div>

						<li className='list-group-item '>Contacto</li>
						<p className='list-group-item text-justify'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. A.
						</p>
					</div>

					<div className='about_page'>
						<div className='about_conten'>
							<div className='card border-0'>
								<div className='card-body'>
									<h5 className='card-title'>Sitio web</h5>
									<p className='card-text list-group-item'>
										Bienvenido a la asignatura "Principios de Electrónica". Aquí
										encontrarás:
										<li className='list-group-item '>
											Información general de los componentes electrónicos de la
											materia
										</li>
										<li className='list-group-item '>
											Prácticas de laboratorio para su desarrollo
										</li>
										<li className='list-group-item '>
											Cuadernillos de ejercicios y hojas de datos, referentes a
											los componentes electrónicos.
										</li>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
