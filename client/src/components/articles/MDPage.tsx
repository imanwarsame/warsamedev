import { Box, useTheme } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MDPage({ fileName }: { fileName: string }) {
	const theme = useTheme();
	const [content, setContent] = useState('');
	const { scrollYProgress } = useScroll();

	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	//UseEffect hook to grab markdown file from public folder
	useEffect(() => {
		fetch(`/${fileName}.md`)
			.then((res) => res.text())
			.then((text) => setContent(text))
			.catch((error) => console.error('Error fetching file:', error));

		window.scrollTo(0, 5);
	}, []);

	return (
		<>
			<Box
				component='div'
				sx={{
					position: 'fixed',
					top: '25vh',
					left: 20,
					width: '5px',
					height: '50vh',
					backgroundColor: theme.palette.background.default,
					zIndex: 3,
					border: '0.1px solid grey',
					borderRadius: '8px',
				}}
			>
				<Box
					component={motion.div}
					sx={{
						width: '100%',
						height: '100%',
						backgroundColor: theme.palette.primary.main,
						transformOrigin: 'top',
						zIndex: 2,
						borderRadius: '8px',
					}}
					style={{ scaleY }}
				/>
			</Box>
			<Box
				component={motion.div}
				initial={{ opacity: 0 }} //Initial state (invisible)
				animate={{ opacity: 1 }} //Final state (fully visible)
				transition={{ duration: 1, ease: 'easeInOut' }} //Duration of the fade-in effect
				sx={{ paddingX: 10, paddingY: '7vh' }}
			>
				<ReactMarkdown>{content}</ReactMarkdown>
			</Box>
		</>
	);
}
