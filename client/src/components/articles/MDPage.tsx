import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MDPage({ fileName }: { fileName: string }) {
	const [content, setContent] = useState('');

	//UseEffect hook to grab markdown file from public folder
	useEffect(() => {
		fetch(`/${fileName}.md`)
			.then((res) => res.text())
			.then((text) => setContent(text))
			.catch((error) => console.error('Error fetching file:', error));
	}, []);

	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0 }} //Initial state (invisible)
			animate={{ opacity: 1 }} //Final state (fully visible)
			transition={{ duration: 1, ease: 'easeInOut' }} //Duration of the fade-in effect
			sx={{ paddingX: 10, paddingTop: '7vh' }}
		>
			<ReactMarkdown>{content}</ReactMarkdown>
		</Box>
	);
}
