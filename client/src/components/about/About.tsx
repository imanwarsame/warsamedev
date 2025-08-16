import { Box, Paper, Stack, Title, Text } from '@mantine/core';
import { Element } from 'react-scroll';

export default function About() {
	return (
		<Element name='about_element'>
			<Box
				style={{
					width: '100%',
					height: '100svh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: '50px',
					paddingLeft: '20px',
					paddingRight: '20px',
				}}
			>
				<Paper p="xl" shadow="sm" radius="md" style={{ width: '100%', maxWidth: '1200px' }}>
					<Stack gap="md">
						<Title order={2} mb="lg">
							About
						</Title>
						<Text size="md">
							Hi! My name is Iman, I&apos;m a senior software and civil engineer at Ramboll.
						</Text>
						<Text size="md">
							I have proven expertise in managing and implementing software solutions both in web
							and desktop development.
						</Text>
						<Text size="md">
							I am also national lead for digital transformation for the Association for
							Consultancy and Engineering Emerging Professionals and founder of Warsame Studio.
						</Text>
					</Stack>
				</Paper>
			</Box>
		</Element>
	);
}
