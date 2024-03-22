import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Articles() {
	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0 }} //Initial state (invisible)
			animate={{ opacity: 1 }} //Final state (fully visible)
			transition={{ duration: 1 }} //Duration of the fade-in effect
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography>This page is being constructed 🏗️</Typography>
		</Box>
	);
}
