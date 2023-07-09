import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { AnimatePresence } from 'framer-motion';
import { Dialog, Grid } from '@mui/material';
import ProjectModal from './ProjectModal';
import { PortfolioItem } from './Types';

export default function Card ( data: PortfolioItem ) {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<Grid item xs={12} md={4}>
			<ProjectCard data={data} open={openModal} />
			<AnimatePresence>
				<Dialog open={open} onClose={closeModal}>
					<ProjectModal data={data} close={closeModal}/>
				</Dialog>
			</AnimatePresence>
		</Grid>
	);
}