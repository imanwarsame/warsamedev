import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectData {
	id: number;
	title1: string; //This is the first half of the title
	title2: string; //Second half of the title
	imageUrl: string;
	webLink: string;
}

const animation = {
	initial: { width: 0 },
	open: { width: 'auto', transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
	closed: { width: 0 },
};

export default function Project(data: ProjectData) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box
			component='div'
			sx={{
				paddingTop: '0.8vw',
				paddingBottom: '0.8vw',
				cursor: 'pointer',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onMouseEnter={() => {
				setIsActive(true);
			}}
			onMouseLeave={() => {
				setIsActive(false);
			}}
			onClick={() => window.open(data.webLink, '_blank', 'noopener,noreferrer')}
		>
			<Typography sx={{ marginRight: '0.75vw' }} variant='h4'>
				{data.title1}
			</Typography>

			<Box
				component={motion.div}
				variants={animation}
				animate={isActive ? 'open' : 'closed'}
				sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', width: 0 }}
			>
				<img src={data.imageUrl} style={{ width: '10vw' }}></img>
			</Box>

			<Typography sx={{ marginLeft: '0.75vw' }} variant='h4'>
				{data.title2}
			</Typography>
		</Box>
	);
}
