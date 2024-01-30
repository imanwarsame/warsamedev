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

export const noiseSphereShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		u_time: { value: 0 },
		u_intensity: { value: 0.3 },
		u_matCapMap: { value: matCaps[2] },
	},
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
});
