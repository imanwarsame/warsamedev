import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { AnimatePresence } from 'framer-motion';
import { Dialog } from '@mui/material';
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
		<>
			<ProjectCard data={data} open={openModal} />
			<AnimatePresence>
				{/* <Modal open={open} onClose={closeModal}>
					<ProjectModal data={data} close={closeModal}/>
				</Modal> */}
				<Dialog open={open} onClose={closeModal} sx={{ overflow: 'scroll' }}>
					<ProjectModal data={data} close={closeModal}/>
				</Dialog>
			</AnimatePresence>
		</>
	);
}