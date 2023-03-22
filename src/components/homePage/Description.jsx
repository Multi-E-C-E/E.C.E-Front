import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './../../css/home.css';
import tab from './assets/tablero_home.png';
import tab2 from './assets/diodos_home.png';

const cardText1 = `Bienvenido a la asignatura "Principios de Electrónica"`;

const cardTitle4 = 'Aqui encontraras :';
const card4Text1 =
	'Información general de los componentes electronicos de la materia';
const card4Text2 = 'Prácticas de laboratorio para su desarrollo';
const card4Text3 =
	'Cuadernillos de ejerccicios y hojas de datos, referentes a los componentes electrónicos';

export const Info = () => {
	return (
		<Container>
			<div className='card-container'>
				<Card className='card'>
					<Card.Body>
						<h1> {cardText1}</h1>
					</Card.Body>
				</Card>
				<Card className='card'>
					<Card.Img variant='top' className='home-img-card ' src={tab2} />
				</Card>
				<Card className='card'>
					<Card.Img variant='top' className='home-img-card ' src={tab} />
				</Card>
				<Card className='card'>
					<Card.Body>
						<h2>{cardTitle4}</h2>
						<h4>
							<li>{card4Text1}</li>
							<li>{card4Text2}</li>
							<li>{card4Text3}</li>
						</h4>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
};
