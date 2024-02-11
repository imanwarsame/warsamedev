import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'test-setup.tsx',
		deps: {
			inline: ['vitest-canvas-mock'],
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
});
