import * as THREE from 'three';
import { TextureLoader } from 'three';
import { vertexShader } from './vertexShader';
import { fragmentShader } from './fragmentShader';
import matCapUrl1 from '../../assets/GroundSand005_Sphere.png';
import matCapUrl2 from '../../assets/DirtWindowStains005_Sphere.png';

const loader = new TextureLoader();

const matCaps = [loader.load(matCapUrl1), loader.load(matCapUrl2)];

export const noiseSphereShaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		u_time: { value: 0 },
		u_intensity: { value: 0.3 },
		u_matCapMap: { value: matCaps[1] },
	},
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
});
