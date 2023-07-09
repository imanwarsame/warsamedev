import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function ProjectModal ({ data, close }: { data: any, close: () => void }) {
	const {
		imageUrl,
		price,
		address,
		description,
		numBedroom,
		numWashrooms,
		livingSpace,
	} = data;

	const modalVariants = {
		open: {
			opacity: 1,
			transition: { staggerChildren: 1, delayChildren: 1 },
		},
		closed: { opacity: 0 },
	};

	const imageVariants = {
		open: { opacity: 1, y: '0vh' },
		closed: { opacity: 0, y: '-10vh' },
	};

	const modalInfoVariants = {
		open: { opacity: 1, transition: { staggerChildren: 1 } },
		closed: { opacity: 0 },
	};

	const modalRowVariants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '10%' },
	};

	return (
		<motion.div variants={modalVariants}>
			<Box position='fixed'
				sx={{
					backgroundColor: 'rgba(255,255,255,0.75)',
					backdropFilter: 'blur(20px)',
					borderRadius: 5,
					width: { xs: '80vw', md: '50vw' },
					left: '50%',
					transform: 'translateX(-50%)',
					top: '50px'
				}}
			>
				<motion.img
					className="modal__image"
					alt="real estate mansion"
					src={imageUrl}
					variants={imageVariants}
					height={50}
				></motion.img>
				<motion.div className="modal__info" variants={modalInfoVariants}>
					<motion.div className="modal__row" variants={modalRowVariants}>
						<span className="modal__price">{price}</span>
					</motion.div>
					<motion.div className="modal__row" variants={modalRowVariants}>
						<span className="modal__address">{address}</span>
					</motion.div>
					<motion.div
						className="modal__description-wrapper"
						variants={modalRowVariants}
					>
						<p className="modal__description">{description}</p>
					</motion.div>
					<motion.button
						className="modal__close-wrapper"
						whileHover={{ scale: 1.2 }}
						onClick={close}
					>
						<CancelOutlinedIcon/>
					</motion.button>
				</motion.div>
			</Box>
		</motion.div>
	);
}