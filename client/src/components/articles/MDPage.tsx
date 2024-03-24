import { Box, useTheme } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MDPage({ fileName }: { fileName: string }) {
	const theme = useTheme();
	const [content, setContent] = useState('');
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
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
	}, []);

	return (
		<>
			<Box
				component={motion.div}
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					height: '10px',
					backgroundColor: theme.palette.secondary.main,
					transformOrigin: '0%',
					zIndex: 3,
				}}
				style={{ scaleX }}
			></Box>
			<Box
				component={motion.div}
				initial={{ opacity: 0 }} //Initial state (invisible)
				animate={{ opacity: 1 }} //Final state (fully visible)
				transition={{ duration: 1, ease: 'easeInOut' }} //Duration of the fade-in effect
				sx={{ paddingX: 10, paddingTop: '7vh' }}
			>
				<ReactMarkdown>{content}</ReactMarkdown>
			</Box>
		</>
	);
}
