import { Box, Stack } from '@mantine/core';
import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Blob from '../blob/Blob';
import Gallery from '../portfolio/Gallery';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: 'easeInOut' }}
		>
			<Box
				style={{
					width: '100%',
					flexGrow: 1,
					transform: 'translateZ(0)',
					WebkitOverflowScrolling: 'touch',
					overflow: 'hidden',
					minHeight: '100vh',
				}}
			>
				<Stack align="center" gap={0}>
					<Blob />
					<About />
					<Gallery />
					<Experience />
					<Contact />
				</Stack>
			</Box>
		</motion.div>
	);
}
