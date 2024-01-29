export const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;
uniform sampler2D u_matCapMap;

void main() {
    // Sample the texture using the UV coordinates
    vec3 matCapColor = texture2D(u_matCapMap, vUv).rgb;

    // Use the sampled color directly without distortion
    gl_FragColor = vec4(matCapColor, 1.0);
}

`;
