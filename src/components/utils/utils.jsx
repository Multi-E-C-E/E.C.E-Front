import image from '../dashboard/assets/eq.png';
import image2 from '../dashboard/assets/img-practice.png';
import tab from '../homePage/assets/tablero_home.png';
import tab2 from '../homePage/assets/diodos_home.png';

export const tools = [
	{
		name: 'Equipos de medición',
		img_item: image,
		desciption: { text: 'Accede a informaciond etalla aquí' },
		path: '/tools',
	},
	{
		name: 'Practicas',
		img_item: image2,
		desciption: { text: 'Mejora tu aprendizaje poniendo en  practica tus concimientos' },
		path: '/practice',
	},
	{
		name: 'Render 3D',
		img_item: image2,
		desciption: { text: 'Mejora tu aprendizaje poniendo en  practica tus concimientos' },
		path: '/dashboard',
	},
	// ...
];

export const components = [
	{
		name: 'Resistencias',
		img_item: image,
		desciption: { text: 'lorem impus odio, alsison equota' },
		path: '/components',
	},
	{
		name: 'Diodos',
		img_item: image2,
		desciption: { text: 'lorem impus odio' },
		path: '/components',
	},
	// ...
];

export const data = [
	{
		title: 'Bienvenido a la asignatura "Principios de Electrónica"',
		text: [],
		imgSrc: '',
	},
	{
		title: 'Aquí encontrarás:',
		text: [
			'Información general de los componentes electrónicos de la materia',
			'Prácticas de laboratorio para su desarrollo',
			'Cuadernillos de ejercicios y hojas de datos, referentes a los componentes electrónicos',
		],
		imgSrc: '',
	},
];
