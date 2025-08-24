import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Vendor chunks for better caching and splitting
					if (id.includes('node_modules')) {
						if (id.includes('react') || id.includes('react-dom')) {
							return 'react-vendor';
						}
						if (id.includes('@mantine') || id.includes('mantine')) {
							return 'mantine-vendor';
						}
						if (id.includes('framer-motion') || id.includes('lottie-react')) {
							return 'animation-vendor';
						}
						if (id.includes('moment') || id.includes('uuid') || id.includes('zustand')) {
							return 'utils-vendor';
						}
						if (id.includes('ogl')) {
							return 'webgl-vendor';
						}
						return 'vendor';
					}
				},
			},
		},
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug'],
			},
			mangle: {
				safari10: true,
			},
		},
		chunkSizeWarningLimit: 1000,
		sourcemap: false,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'test-setup.tsx',
		deps: {
			inline: ['vitest-canvas-mock', '@theme-toggles/react'],
		},
		threads: false,
		environmentOptions: {
			jsdom: {
				resources: 'usable',
			},
		},
	},
	server: {
		host: true, // Open to local network and display URL
		open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env), // Open if it's not a CodeSandbox
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ['react', 'react-dom', '@mantine/core', '@mantine/hooks', 'framer-motion'],
		exclude: ['vitest-canvas-mock'],
	},
});
