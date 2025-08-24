import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// Vendor chunks for better caching
					'react-vendor': ['react', 'react-dom'],
					'mantine-vendor': ['@mantine/core', '@mantine/hooks', '@mantine/notifications', '@mantine/modals'],
					'animation-vendor': ['framer-motion', 'lottie-react'],
					'utils-vendor': ['moment', 'uuid', 'zustand'],
				},
			},
		},
		// Enable gzip compression and other optimizations
		chunkSizeWarningLimit: 1000,
		sourcemap: false, // Disable sourcemaps in production for smaller bundle
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
