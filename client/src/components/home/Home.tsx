import { Box, Stack } from '@mantine/core';
import Hero from '../hero/Hero';
import { lazy, Suspense } from 'react';

// Lazy load non-critical sections
const About = lazy(() => import('../about/About'));
const Technologies = lazy(() => import('../technologies/Technologies'));
const Projects = lazy(() => import('../projects/Projects'));
const Contact = lazy(() => import('../contact/Contact'));

export default function Home() {
	return (
		<div style={{ width: '100%' }}>
			<Box
				style={{
					width: '100vw',
					flexGrow: 1,
					transform: 'translateZ(0)',
					WebkitOverflowScrolling: 'touch',
					overflow: 'hidden',
				}}
			>
				<Stack gap={0} style={{ width: '100%' }}>
					<Hero />
					<Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
						<About />
					</Suspense>
					<Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
						<Technologies />
					</Suspense>
					<Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
						<Projects />
					</Suspense>
					<Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
						<Contact />
					</Suspense>
				</Stack>
			</Box>
		</div>
	);
}
