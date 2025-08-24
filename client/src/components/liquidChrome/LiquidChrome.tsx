import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

import './LiquidChrome.css';

interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
	baseColor?: [number, number, number];
	speed?: number;
	amplitude?: number;
	frequencyX?: number;
	frequencyY?: number;
	interactive?: boolean;
}

export const LiquidChrome: React.FC<LiquidChromeProps> = ({
	baseColor = [0.1, 0.1, 0.1],
	speed = 0.2,
	amplitude = 0.5,
	frequencyX = 3,
	frequencyY = 2,
	interactive = true,
	...props
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const renderer = new Renderer({ antialias: true });
		const gl = renderer.gl;
		gl.clearColor(1, 1, 1, 1);

		const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

		const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          for (float i = 1.0; i < 10.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 20.0);
          float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
          uv += (diff / (dist + 0.0001)) * ripple * falloff;

          vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
          return vec4(color, 1.0);
      }

      void main() {
          vec4 col = vec4(0.0);
          int samples = 0;
          for (int i = -1; i <= 1; i++){
              for (int j = -1; j <= 1; j++){
                  vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
                  col += renderImage(vUv + offset);
                  samples++;
              }
          }
          gl_FragColor = col / float(samples);
      }
    `;

		const geometry = new Triangle(gl);
		const program = new Program(gl, {
			vertex: vertexShader,
			fragment: fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uResolution: {
					value: new Float32Array([
						gl.canvas.width,
						gl.canvas.height,
						gl.canvas.width / gl.canvas.height,
					]),
				},
				uBaseColor: { value: new Float32Array(baseColor) },
				uAmplitude: { value: amplitude },
				uFrequencyX: { value: frequencyX },
				uFrequencyY: { value: frequencyY },
				uMouse: { value: new Float32Array([0, 0]) },
			},
		});
		const mesh = new Mesh(gl, { geometry, program });

		let cachedRect: DOMRect | null = null;
		let rafId: number | null = null;

		function resize() {
			if (rafId) return;
			
			rafId = requestAnimationFrame(() => {
				if (!cachedRect) {
					cachedRect = container.getBoundingClientRect();
				}
				
				const scale = 1;
				const width = cachedRect.width;
				const height = cachedRect.height;
				
				renderer.setSize(width * scale, height * scale);
				const resUniform = program.uniforms.uResolution.value as Float32Array;
				resUniform[0] = width * scale;
				resUniform[1] = height * scale;
				resUniform[2] = width / height;
				
				rafId = null;
			});
		}

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				cachedRect = entry.contentRect;
				resize();
			}
		});
		
		resizeObserver.observe(container);
		resize();

		function handleMouseMove(event: MouseEvent) {
			if (!cachedRect) {
				cachedRect = container.getBoundingClientRect();
			}
			const x = (event.clientX - cachedRect.left) / cachedRect.width;
			const y = 1 - (event.clientY - cachedRect.top) / cachedRect.height;
			const mouseUniform = program.uniforms.uMouse.value as Float32Array;
			mouseUniform[0] = x;
			mouseUniform[1] = y;
		}

		function handleTouchMove(event: TouchEvent) {
			if (event.touches.length > 0) {
				const touch = event.touches[0];
				if (!cachedRect) {
					cachedRect = container.getBoundingClientRect();
				}
				const x = (touch.clientX - cachedRect.left) / cachedRect.width;
				const y = 1 - (touch.clientY - cachedRect.top) / cachedRect.height;
				const mouseUniform = program.uniforms.uMouse.value as Float32Array;
				mouseUniform[0] = x;
				mouseUniform[1] = y;
			}
		}

		if (interactive) {
			container.addEventListener('mousemove', handleMouseMove);
			container.addEventListener('touchmove', handleTouchMove);
		}

		let animationId: number;
		function update(t: number) {
			animationId = requestAnimationFrame(update);
			program.uniforms.uTime.value = t * 0.001 * speed;
			renderer.render({ scene: mesh });
		}
		animationId = requestAnimationFrame(update);

		container.appendChild(gl.canvas);

		return () => {
			cancelAnimationFrame(animationId);
			if (rafId) {
				cancelAnimationFrame(rafId);
			}
			resizeObserver?.disconnect();
			if (interactive) {
				container.removeEventListener('mousemove', handleMouseMove);
				container.removeEventListener('touchmove', handleTouchMove);
			}
			if (gl.canvas.parentElement) {
				gl.canvas.parentElement.removeChild(gl.canvas);
			}
			gl.getExtension('WEBGL_lose_context')?.loseContext();
		};
	}, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

	return <div ref={containerRef} className='liquidChrome-container' {...props} />;
};

export default LiquidChrome;
