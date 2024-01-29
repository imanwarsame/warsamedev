import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, MeshProps } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box } from '@mui/material';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import { useControls } from 'leva';

const sphereShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		u_time: { value: 0 },
		u_intensity: { value: 0.3 },
	},
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
});

interface NoiseSphereProps extends MeshProps {
	frequency: number;
	amplitude: number;
}

export const Sphere = ({
	frequency,
	amplitude,
	...props
}: NoiseSphereProps) => {
	const meshRef = useRef<THREE.Mesh>(null!);
	const [_hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	// useFrame((_state, delta) => (meshRef.current.rotation.x += delta / 3));

	// Use Leva controls
	const { Frequency: levaIntensity, Amplitude: levaTime } = useControls({
		Frequency: { value: frequency, min: 0, max: 10, step: 0.1 },
		Amplitude: { value: amplitude, min: 0, max: 10, step: 0.1 },
	});

	// Apply the custom material to the mesh
	const material = useMemo(() => sphereShaderMaterial, []);

	// Use useFrame to update the shader uniforms
	useFrame((state) => {
		const { clock } = state;
		if (meshRef.current) {
			material.uniforms.u_time.value = levaIntensity * clock.getElapsedTime();
			material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
				material.uniforms.u_intensity.value,
				levaTime,
				0.02,
			);
		}
	});

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<icosahedronGeometry attach="geometry" args={[2, 20]} />
			<primitive object={material} attach="material" />
			{/* <meshStandardMaterial
				wireframe={true}
				color={hovered ? 'hotpink' : 'orange'}
			/> */}
		</mesh>
	);
};

export default function Blob() {
	return (
		<Box component="div" sx={{ height: '100vh', border: 1 }}>
			<Canvas>
				<OrbitControls />
				<ambientLight intensity={Math.PI / 2} />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Sphere frequency={1} amplitude={0.3} position={[-2, 0, 0]} />
				<Sphere frequency={1} amplitude={0.3} position={[2, 0, 0]} />
			</Canvas>
		</Box>
	);
}
