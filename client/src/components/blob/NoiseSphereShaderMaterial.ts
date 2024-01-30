import * as THREE from 'three';
import { TextureLoader } from 'three';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';
import matCapUrl1 from '../../assets/matte_black.png';
import matCapUrl2 from '../../assets/matte_green.png';
import matCapUrl3 from '../../assets/matte_mint.png';

const loader = new TextureLoader();

const matCaps = [
	loader.load(matCapUrl1),
	loader.load(matCapUrl2),
	loader.load(matCapUrl3),
];

const settings = {
	speed: 0.2,
	density: 1.5,
	strength: 0.2,
	frequency: 3.0,
	amplitude: 6.0,
	intensity: 7.0,
	wireframe: false,
};

export const noiseSphereShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		uTime: { value: 0 },
		uSpeed: { value: settings.speed },
		uNoiseDensity: { value: settings.density },
		uNoiseStrength: { value: settings.strength },
		uFrequency: { value: settings.frequency },
		uAmplitude: { value: settings.amplitude },
		uIntensity: { value: settings.intensity },
		u_matCapMap: { value: matCaps[2] },
	},
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
});
