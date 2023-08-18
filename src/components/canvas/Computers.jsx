import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
	const computer = useGLTF('./laptop/EC-0002 Laptop Cycles.blend');
	return (
		<primitive
			object={computer.scene}
			scale={20}
			position-y={0}
			rotation-y={0}
		/>
	);
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop='demand'
			shadows
			dpr={[1, 2]}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6]
			}}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers />
			</Suspense>
		</Canvas>
	);
};

export default ComputersCanvas;
