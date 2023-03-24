import image from '../dashboard/assets/eq.png';
import image2 from '../dashboard/assets/img-practice.png';
import tab from '../homePage/assets/tablero_home.png';
import tab2 from '../homePage/assets/diodos_home.png';

export const tools = [
	{
		name: 'Equipos de medicon',
		img_item: image,
		desciption: { text: 'lorem impus odio, alsison equota' },
		path: '/tools',
	},
	{
		name: 'Practicas',
		img_item: image2,
		desciption: { text: 'lorem impus odio' },
		path: '/practice',
	},
	// ...
];

export const cardsHomeData = [
	{
		title: '',
		text: 'Bienvenido a la asignatura "Principios de Electrónica"',
		imgSrc: '',
	},
	{
		title: '',
		text: '',
		imgSrc: tab2,
	},
	{
		title: '',
		text: '',
		imgSrc: tab,
	},
	{
		title: 'Aqui encontraras :',
		text: [
			'Información general de los componentes electronicos de la materia',
			'Prácticas de laboratorio para su desarrollo',
			'Cuadernillos de ejerccicios y hojas de datos, referentes a los componentes electrónicos',
		],
		imgSrc: '',
	},
];
