import { MeshProps, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { noiseSphereShaderMaterial } from './NoiseSphereShaderMaterial';

interface NoiseSphereProps extends MeshProps {
	frequency?: number;
	amplitude?: number;
	speed?: number;
	density?: number;
	strength?: number;
	intensity?: number;
}

export default function NoiseSphere({
	frequency = 3.0,
	amplitude = 6.0,
	speed = 0.2,
	density = 1.2,
	strength = 0.3,
	intensity: propIntensity = 7.0, // Using a different name to avoid conflicts
	...props
}: NoiseSphereProps) {
	const meshRef = useRef<THREE.Mesh>(null!);
	const [active, setActive] = useState(false);

	// Use Leva controls
	const {
		Frequency: levaFrequency,
		Amplitude: levaAmplitude,
		Speed: levaSpeed,
		Density: levaDensity,
		Strength: levaStrength,
		Intensity: levaIntensity,
	} = useControls({
		Frequency: { value: frequency, min: 0, max: 10, step: 0.1 },
		Amplitude: { value: amplitude, min: 0, max: 10, step: 0.1 },
		Speed: { value: speed, min: 0, max: 10, step: 0.1 },
		Density: { value: density, min: 0, max: 10, step: 0.1 },
		Strength: { value: strength, min: 0, max: 10, step: 0.1 },
		Intensity: { value: propIntensity, min: 0, max: 10, step: 0.1 },
	});

	// Apply the custom material to the mesh
	const material = useMemo(() => noiseSphereShaderMaterial, []);

	// Use useFrame to update the shader uniforms
	useFrame((state) => {
		const { clock } = state;
		if (meshRef.current && material && material.uniforms) {
			material.uniforms.uTime.value = levaFrequency * clock.getElapsedTime();

			material.uniforms.uSpeed.value = levaSpeed;
			material.uniforms.uNoiseDensity.value = levaDensity;
			material.uniforms.uNoiseStrength.value = levaStrength;
			material.uniforms.uFrequency.value = levaFrequency;
			material.uniforms.uAmplitude.value = levaAmplitude;
			material.uniforms.uIntensity.value = levaIntensity;

			// //Lerp is used to ease the transition between the base value and the max value
			// material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
			// 	material.uniforms.u_intensity.value,
			// 	levaTime,
			// 	0.02,
			// );
		}
	});

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
		>
			<icosahedronGeometry attach="geometry" args={[1, 64]} />
			<primitive object={material} attach="material" />
		</mesh>
	);
}
