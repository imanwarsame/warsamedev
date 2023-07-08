import { motion } from 'framer-motion';

export default function ProjectCard ({ data, open }: { data: any, open: () => void }) {
	const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } = data;

	return (
		<motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
			<div className="listing__content">
				<div className="listing__image-container">
					<img
						className="listing__image"
						alt="real estate mansion"
						src={imageUrl}
						height={200}
					/>
				</div>
			</div>
		</motion.div>
	);
}