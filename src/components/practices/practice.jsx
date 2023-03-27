import { Container } from 'react-bootstrap';
import './../../css/practices.css';

export const Practice = () => {
	return (
		<>
			<Container>
					<div className='visualizador-PDF'>
						<h1>Practicas</h1>
						<h2>Seleccionar practica a ver</h2>
						<embed
							src={URL}
							type='application/pdf'
						/>
					</div>
			</Container>
		</>
	);
};
