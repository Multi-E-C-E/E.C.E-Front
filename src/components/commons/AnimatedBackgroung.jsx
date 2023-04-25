import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../../css/animatedBackground.css';
import bgbk from './../../assets/transistor.svg'

const configParticles = {
	fpsLimit: 60,
	particles: {
		number: {
			value: 45,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#000000',
		},
		shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: `${bgbk}`,
        width: 100,
        height: 100
      }
    },
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 15,
			random: true,
			anim: {
				enable: false,
				speed: 112.47337731228507,
				size_min: 5.58378468926238,
				sync: true,
			},
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#100d0d',
			opacity: 0.5,
			width: 1,
		},
		move: {
			enable: true,
			speed: 2,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: false,
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
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
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
};

const MyParticles = () => {
	const handleParticlesLoaded = useCallback(main => {
		console.log(main);
	}, []);

	return (
		<>
			<div style={{ position: 'relative' }} className='Background'>
				<Particles
					id='tsparticles'
					init={loadFull}
					options={configParticles}
					loaded={handleParticlesLoaded}
				/>
			</div>
		</>
	);
};

export default MyParticles;
