import * as THREE from 'three';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';

export const noiseSphereShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		u_time: { value: 0 },
		u_intensity: { value: 0.3 },
	},
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
});
