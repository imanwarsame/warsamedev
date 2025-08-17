import { Box, Stack } from '@mantine/core';
import Hero from '../hero/Hero';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Technologies from '../technologies/Technologies';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: 'easeInOut' }}
			style={{ width: '100%' }}
		>
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
					<About />
					<Technologies />
					<Projects />
					<Contact />
				</Stack>
			</Box>
		</motion.div>
	);
}
