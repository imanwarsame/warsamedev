import { Box, useMantineTheme, Text } from '@mantine/core';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import ReactMarkdown from 'react-markdown';

export default function MDPage({ fileName }: { fileName: string }) {
	const theme = useMantineTheme();
	const [content, setContent] = useState('');
	const [isContentLoaded, setIsContentLoaded] = useState(false);
	const { scrollYProgress } = useScroll();
	const isMobile = useMediaQuery('(max-width: 768px)');

	// Transform scroll progress to create a smooth fill effect - only after content loads
	const scrollHeight = useTransform(
		scrollYProgress, 
		[0, 1], 
		isContentLoaded ? ['0%', '100%'] : ['0%', '0%']
	);
	const scrollOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

	//UseEffect hook to grab markdown file from public folder
	useEffect(() => {
		fetch(`/${fileName}.md`)
			.then((res) => res.text())
			.then((text) => {
				setContent(text);
				// Small delay to ensure content is rendered before enabling scrollbar
				setTimeout(() => {
					setIsContentLoaded(true);
				}, 100);
			})
			.catch((error) => console.error('Error fetching file:', error));

		window.scrollTo(0, 0);
	}, [fileName]);

	return (
		<>
			{/* Flat Scrollbar Container */}
			<motion.div
				style={{
					position: 'fixed',
					top: '15vh',
					left: 20,
					width: '4px',
					height: '70vh',
					backgroundColor: theme.colors.gray[2],
					zIndex: 100,
					borderRadius: '2px',
					opacity: scrollOpacity,
				}}
			>
				{/* Animated Fill Bar */}
				<motion.div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: scrollHeight,
						backgroundColor: theme.colors.blue[6],
						borderRadius: '2px',
					}}
				/>
			</motion.div>
			<Box
				component={motion.div}
				initial={{ opacity: 0 }} //Initial state (invisible)
				animate={{ opacity: 1 }} //Final state (fully visible)
				transition={{ duration: 1, ease: 'easeInOut' }} //Duration of the fade-in effect
				style={{ 
					paddingLeft: isMobile ? '15vw' : '7.5vw', 
					paddingRight: isMobile ? '8vw' : '7.5vw', 
					paddingTop: '12vh', 
					paddingBottom: '2vh' 
				}}
			>
				<ReactMarkdown>{content}</ReactMarkdown>
				
				{/* Footer */}
				<Box style={{ 
					marginTop: '4vh', 
					paddingTop: '2vh', 
					borderTop: `1px solid ${theme.colors.gray[3]}`,
					textAlign: 'center' 
				}}>
					<Text size='sm' c='dimmed'>
						© 2025 Iman Warsame
					</Text>
				</Box>
			</Box>
		</>
	);
}
