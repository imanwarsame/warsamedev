import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const words = ['Hello', 'Bonjour', 'Ciao', 'Olà', 'やあ', 'السلام عليكم', 'Guten tag', 'Hallo'];

const opacity = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 0.75,
		transition: { duration: 1, delay: 0.2 },
	},
};

const slideUp = {
	initial: {
		top: 0,
	},
	exit: {
		top: '-100vh',
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
	},
};

export default function Splash() {
	const [index, setIndex] = useState(0);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setDimension({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	useEffect(() => {
		if (index == words.length - 1) return;
		setTimeout(
			() => {
				setIndex(index + 1);
			},
			index == 0 ? 1000 : 150,
		);
	}, [index]);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<Box
			component={motion.div}
			variants={slideUp}
			initial='initial'
			exit='exit'
			sx={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'fixed',
				zIndex: 5,
				backgroundColor: '#071F19',
				overflow: 'hidden',
			}}
		>
			{dimension.width > 0 && (
				<>
					<Typography
						component={motion.p}
						variants={opacity}
						initial='initial'
						animate='enter'
						sx={{
							display: 'flex',
							color: 'white',
							fontSize: '42px',
							alignItems: 'center',
							position: 'absolute',
							zIndex: 1,
						}}
					>
						{words[index]}
					</Typography>
					<svg
						style={{
							position: 'absolute',
							top: 0,
							width: '100%',
							height: 'calc(100% + 300px)',
						}}
					>
						<motion.path
							variants={curve}
							initial='initial'
							exit='exit'
							style={{ fill: '#071F19' }}
						></motion.path>
					</svg>
				</>
			)}
		</Box>
	);
}
