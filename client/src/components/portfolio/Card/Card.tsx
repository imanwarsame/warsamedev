import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { AnimatePresence } from 'framer-motion';
import { Dialog, Grid } from '@mui/material';
import ProjectModal from './ProjectModal';

export default function Card ( data: any ) {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<Grid item sm={12} md={4}>
			<ProjectCard data={data.data} open={openModal} />
			<AnimatePresence>
				{/* <Modal open={open} onClose={closeModal}>
					<ProjectModal data={data} close={closeModal}/>
				</Modal> */}
				<Dialog open={open} onClose={closeModal}>
					<ProjectModal data={data.data} close={closeModal}/>
				</Dialog>
			</AnimatePresence>
		</Grid>
	);
}