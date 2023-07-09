import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function ProjectCard ({ data, open }: { data: any, open: () => void }) {
	const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } = data;

	return (
		<motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
			<Box sx={{ backgroundImage: `url(${imageUrl})`, backgroundColor: 'salmon', border: 2, borderRadius: 5, borderColor: 'fuchsia',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundSize: 'cover', height: '400px' }}>
				{/* <img
					className="listing__image"
					alt="real estate mansion"
					src={imageUrl}
					height={200}
				/> */}
			</Box>
		</motion.div>
	);
}