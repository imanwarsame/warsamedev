import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined
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
		include: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
		exclude: ['vitest-canvas-mock'],
	},
});
