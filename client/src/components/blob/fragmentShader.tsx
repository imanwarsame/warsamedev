export const fragmentShader = `
varying vec2 vUv;
varying float vDistort;

uniform float uTime;
uniform float uIntensity;
uniform sampler2D u_matCapMap;


vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(9.28318 * (c * t + d));
}

void main() {
  float distort = vDistort * uIntensity;

  vec3 brightness = vec3(0.5, 0.5, 0.5);
  vec3 contrast = vec3(0.5, 0.5, 0.5);
  vec3 oscilation = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.0, 0.1, 0.2);

  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);

  vec3 matcapColor = texture2D(u_matCapMap, vUv).rgb;

  gl_FragColor = vec4(matcapColor, 1.0);
}
`;
