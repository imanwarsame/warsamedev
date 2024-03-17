import { MeshProps, useFrame } from '@react-three/fiber';
// import { useControls } from 'leva';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { noiseSphereShaderMaterial } from './NoiseSphereShaderMaterial';
import { useMediaQuery, useTheme } from '@mui/material';
import { useDevStore } from '../../store';

interface NoiseSphereProps extends MeshProps {
	frequency?: number;
	amplitude?: number;
	speed?: number;
	density?: number;
	strength?: number;
	intensity?: number;
}

export default function NoiseSphere({
	frequency = 0.7,
	amplitude = 10,
	speed = 0.1,
	density = 8.0,
	strength = 2.8,
	intensity: propIntensity = 5.2, //Using a different name to avoid conflicts
	...props
}: NoiseSphereProps) {
	const sphereRef = useRef<THREE.Mesh>(null!);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
	const { darkMode } = useDevStore();

	// // Use Leva controls
	// const {
	// 	Frequency: levaFrequency,
	// 	Amplitude: levaAmplitude,
	// 	Speed: levaSpeed,
	// 	Density: levaDensity,
	// 	Strength: levaStrength,
	// 	Intensity: levaIntensity,
	// } = useControls({
	// 	Frequency: { value: frequency, min: 0, max: 10, step: 0.1 },
	// 	Amplitude: { value: amplitude, min: 0, max: 10, step: 0.1 },
	// 	Speed: { value: speed, min: 0, max: 10, step: 0.1 },
	// 	Density: { value: density, min: 0, max: 10, step: 0.1 },
	// 	Strength: { value: strength, min: 0, max: 10, step: 0.1 },
	// 	Intensity: { value: propIntensity, min: 0, max: 10, step: 0.1 },
	// });

	//Apply the custom material to the mesh
	const material = useMemo(() => noiseSphereShaderMaterial(darkMode), [darkMode]);

	//Use useFrame to update the shader uniforms
	useFrame((state) => {
		const { clock } = state;
		if (sphereRef.current && material && material.uniforms) {
			material.uniforms.uTime.value = frequency * clock.getElapsedTime();

			material.uniforms.uSpeed.value = speed;
			material.uniforms.uNoiseDensity.value = density;
			material.uniforms.uNoiseStrength.value = strength;
			material.uniforms.uFrequency.value = frequency;
			material.uniforms.uAmplitude.value = amplitude;
			material.uniforms.uIntensity.value = propIntensity;

			// //Leva version
			// material.uniforms.uTime.value = levaFrequency * clock.getElapsedTime();

			// material.uniforms.uSpeed.value = levaSpeed;
			// material.uniforms.uNoiseDensity.value = levaDensity;
			// material.uniforms.uNoiseStrength.value = levaStrength;
			// material.uniforms.uFrequency.value = levaFrequency;
			// material.uniforms.uAmplitude.value = levaAmplitude;
			// material.uniforms.uIntensity.value = levaIntensity;
		}
	});

	/* Adjust the position of the sphere based on the screen size. */
	useEffect(() => {
		if (isSmallScreen) {
			sphereRef.current.position.x = 12;
			sphereRef.current.position.y = 0;
		} else if (isMediumScreen) {
			sphereRef.current.position.x = 8;
			sphereRef.current.position.y = 0;
		} else {
			sphereRef.current.position.x = 12;
			sphereRef.current.position.y = 0;
		}
	}, [isSmallScreen, isMediumScreen]);

	return (
		<mesh {...props} ref={sphereRef}>
			<icosahedronGeometry attach='geometry' args={[12, 12]} />
			<primitive object={material} attach='material' />
		</mesh>
	);
}
