import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Canvas } from '@react-three/fiber';

import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon, i }) => {
	return (
		<motion.div
			variants={fadeIn('up', 0.3 * i * 0.1)}
			initial={window.innerWidth > 768 ? 'hidden' : null}
			whileInView='show'
			viewport={{ once: true, amount: 0 }}
			className='w-20 h-20'
		>
			<Canvas
				frameloop='demand'
				dpr={[1, 2]}
				gl={{ preserveDrawingBuffer: true }}
			>
				<Suspense fallback={<CanvasLoader />}>
					{window.innerWidth > 768 && <OrbitControls enableZoom={false} />}
					<Ball imgUrl={icon} />
				</Suspense>

				<Preload all />
			</Canvas>
		</motion.div>
	);
};

export default BallCanvas;
