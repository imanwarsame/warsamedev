import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import './NoiseMaterial';

interface NoiseSphereProps {
	frequency: number;
	amplitude: number;
	time: number;
	setTime: React.Dispatch<React.SetStateAction<number>>;
	type: number;
	offset?: number;
	[key: string]: any;
}

interface CustomMaterial extends THREE.ShaderMaterial {
	uniforms: {
		u_amplitude: { value: number };
		u_frequency: { value: number };
		u_time: { value: number };
		// Add any other uniforms you might have
	};
}

const d = 120;
const radius = 70;

export const NoiseSphere = ({
	frequency,
	amplitude,
	time,
	setTime,
	type,
	offset = 0,
	...props
}: NoiseSphereProps) => {
	const sphere = useRef<THREE.Mesh>(null!);

	useFrame((state) => {
		if (sphere.current) {
			setTime(state.clock.elapsedTime);

			const material = sphere.current.material as CustomMaterial; // Type assertion

			material.uniforms.u_amplitude.value = amplitude;
			material.uniforms.u_frequency.value = frequency;
			material.uniforms.u_time.value = time;
		}
	});

	return (
		<mesh ref={sphere} {...props}>
			<icosahedronBufferGeometry args={[radius, 60]} />
			<noiseMaterialMatCap attach="material" args={[type, offset]} />
		</mesh>
	);
};
