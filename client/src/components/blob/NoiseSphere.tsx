import { MeshProps, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { noiseSphereShaderMaterial } from './NoiseSphereShaderMaterial';
import { useMediaQuery, useTheme } from '@mui/material';

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
	const sphereRef = useRef<THREE.Mesh>(null!);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

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
		if (sphereRef.current && material && material.uniforms) {
			material.uniforms.uTime.value = levaFrequency * clock.getElapsedTime();

			material.uniforms.uSpeed.value = levaSpeed;
			material.uniforms.uNoiseDensity.value = levaDensity;
			material.uniforms.uNoiseStrength.value = levaStrength;
			material.uniforms.uFrequency.value = levaFrequency;
			material.uniforms.uAmplitude.value = levaAmplitude;
			material.uniforms.uIntensity.value = levaIntensity;
		}
	});

	useEffect(() => {
		if (isSmallScreen) {
			sphereRef.current.position.x = 5;
			sphereRef.current.position.y = 5;
		} else if (isMediumScreen) {
			sphereRef.current.position.x = 5;
			sphereRef.current.position.y = 5;
		} else {
			sphereRef.current.position.x = 1;
			sphereRef.current.position.y = 1;
		}
	}, [isSmallScreen, isMediumScreen]);

	return (
		<mesh {...props} ref={sphereRef}>
			<icosahedronGeometry attach="geometry" args={[6, 64]} />
			<primitive object={material} attach="material" />
		</mesh>
	);
}
