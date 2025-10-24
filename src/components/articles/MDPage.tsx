import { Box, useMantineTheme, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import ReactMarkdown from 'react-markdown';

export default function MDPage({ fileName }: { fileName: string }) {
	const theme = useMantineTheme();
	const [content, setContent] = useState('');
	const isMobile = useMediaQuery('(max-width: 768px)');

	//UseEffect hook to grab markdown file from public folder
	useEffect(() => {
		fetch(`/${fileName}.md`)
			.then((res) => res.text())
			.then((text) => {
				setContent(text);
			})
			.catch((error) => console.error('Error fetching file:', error));

		window.scrollTo(0, 0);
	}, [fileName]);

	return (
		<>
			<Box
				style={{
					paddingLeft: isMobile ? '15vw' : '7.5vw',
					paddingRight: isMobile ? '8vw' : '7.5vw',
					paddingTop: '12vh',
					paddingBottom: '2vh',
				}}
			>
				<ReactMarkdown>{content}</ReactMarkdown>

				{/* Footer */}
				<Box
					style={{
						marginTop: '4vh',
						paddingTop: '2vh',
						borderTop: `1px solid ${theme.colors.gray[3]}`,
						textAlign: 'center',
					}}
				>
					<Text size='sm' c='dimmed'>
						© 2025 Iman Warsame
					</Text>
				</Box>
			</Box>
		</>
	);
}
