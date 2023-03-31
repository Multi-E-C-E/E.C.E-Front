import { useRef, useEffect } from 'react';
//* importa lo necesario para crear la escena
import * as THREE from 'three';
//* importa las funcionalidades
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//* import para cargar assets
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Container } from '@mui/material';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const render = ({ asset }) => {
	const mountRef = useRef(null);

	useEffect(() => {
		// # se obtienen las medidas del equipo del usuario
		const currentRef = mountRef.current;
		const { clientWidth: width, clientHeight: height } = currentRef;

		// # Se crea la instancia de threejs
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0x808080);

		// # se crea la camara, el angulo desde que el podremos ver
		const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);
		scene.add(camera);
		camera.position.z = 6;
		camera.position.x = 6;

		// # se crea el render
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(width, height);

		// # se añade el render a una referencia o canvas, es donde se mostrara
		currentRef.appendChild(renderer.domElement);

		// # despues de añadir el render se da las funcionalidades
		// ? despues hay que crear una funcion que se encargue de controlarlo y darle sus atributos
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;

		// # Load model
		const GLTF = new GLTFLoader();
		GLTF.load(
			`${BASE_URL}public/${asset.url}`,
			gltf => {
				console.log('cargado');
				scene.add(gltf.scene);
				camera.lookAt(gltf.scene.position);
			},
			() => {
				console.log('cargando');
			},
			() => {
				console.log('error');
			}
		);

		// # se debe crear una luz ambiental para darle el color deseado
		//* ayuda a darle el color natural
		const ambientalLight = new THREE.AmbientLight(0xffffff, 3);
		scene.add(ambientalLight);

		// # se crea el punto de luz para la escena, pero le cambia el color al objeto
		//* ayuda a darle brillo
		const pointLight = new THREE.PointLight(0xffffff, 1);
		pointLight.position.set(8, 8, 8);
		scene.add(pointLight);

		// # funcion que controla el movimiento
		const animate = () => {
			// # esto hace que se detenga suavemente
			controls.update();
			// # Renderiza el nuevo frame y despues se llama a si mismo para seguir renderizando
			// # esto tambien hace que se pueda manipular
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};

		// # se saco del adEventListener para remover el evento cuando el componente sea desmontado
		//* esto mejora el rendimiento de la web
		const resize = () => {
			const updateWidth = currentRef.clientWidth;
			const updateHeight = currentRef.clientHeight;
			renderer.setSize(updateWidth, updateHeight);
			// # esto es para que no se deforme el objeto con el resize
			camera.aspect = updateWidth / updateHeight;
			camera.updateProjectionMatrix();
		};

		// # funcion para hacer el resize de la escena deacuerdo al cambio de la pantalla
		window.addEventListener('resize', resize);

		// # se llama la funcion de control y como renderiza la scena ya no es necesario tener el otro
		animate();

		return () => {
			// # aqui se remueven los eventos
			currentRef.removeChild(renderer.domElement);
			window.removeEventListener('resize', resize);
		};
	}, [asset]);
	return (
		<>
			<Container maxWidth='sm'>
				<div ref={mountRef} style={{ width: '100%', height: '50vh' }}></div>
			</Container>
		</>
	);
};

export default render;
