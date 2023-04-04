import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../../css/animatedBackground.css';

const configParticles = {
	fpsLimit: 60,
	particles: {
		number: {
			value: 260,
			density: {
				enable: true,
				value_area: 1500,
			},
		},
		color: {
			value: '#ff0000',
			animation: {
				enable: true,
				speed: 20,
				sync: true,
			},
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
			},
			polygon: {
				nb_sides: 5,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 3,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 20,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#4b0082',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'bottom',
			random: false,
			straight: false,
			out_mode: 'out',
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
		life: {
			duration: {
				sync: false,
				value: 6,
			},
			count: 0,
			delay: {
				random: {
					enable: true,
					minimumValue: 0.5,
				},
				value: 1,
			},
		},
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse',
			},
			onclick: {
				enable: true,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 0.8,
			},
			repulse: {
				distance: 50,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
	background: {
		color: '#003f5a',
		image: '',
		position: '50% 50%',
		repeat: 'no-repeat',
		size: 'cover',
	},
};

const Background = () => {
	const particlesInit = useCallback(async engine => {
		console.log(engine);

		await loadFull(engine);
	}, []);

	return (
		<div style={{ position: 'relative' }} className='Background'>
			<Particles init={particlesInit} options={configParticles} />
		</div>
	);
};

export default Background;
