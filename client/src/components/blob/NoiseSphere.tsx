import { MeshProps, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { noiseSphereShaderMaterial } from './NoiseSphereShaderMaterial';

interface NoiseSphereProps extends MeshProps {
	frequency: number;
	amplitude: number;
}

export default function NoiseSphere({
	frequency,
	amplitude,
	...props
}: NoiseSphereProps) {
	const meshRef = useRef<THREE.Mesh>(null!);
	const [active, setActive] = useState(false);

	// Use Leva controls
	const { Frequency: levaIntensity, Amplitude: levaTime } = useControls({
		Frequency: { value: frequency, min: 0, max: 10, step: 0.1 },
		Amplitude: { value: amplitude, min: 0, max: 10, step: 0.1 },
	});

	// Apply the custom material to the mesh
	const material = useMemo(() => noiseSphereShaderMaterial, []);

	// Use useFrame to update the shader uniforms
	useFrame((state) => {
		const { clock } = state;
		if (meshRef.current) {
			material.uniforms.u_time.value = levaIntensity * clock.getElapsedTime();

			//Lerp is used to ease the transition between the base value and the max value
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
		>
			<icosahedronGeometry attach="geometry" args={[2, 20]} />
			<primitive object={material} attach="material" />
		</mesh>
	);
}
