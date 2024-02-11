import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { PortfolioItem } from './Types';

export default function ProjectCard({ data, open }: { data: PortfolioItem; open: () => void }) {
	return (
		<motion.div className='project_card' onClick={open} whileHover={{ scale: 1.1 }}>
			<Box
				component='div'
				sx={{
					backgroundImage: `url(${data.imageUrl})`,
					borderRadius: 5,
					border: 1,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					height: '300px',
				}}
			></Box>
		</motion.div>
	);
}
