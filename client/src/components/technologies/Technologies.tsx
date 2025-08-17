import { Container, Title, Text, Badge, Stack, Box, SimpleGrid, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useDevStore } from '../../store';
import { technologies } from './TechnologiesData';

export default function Technologies() {
	const { darkMode } = useDevStore();
	const isMobile = useMediaQuery('(max-width: 768px)');

	return (
		<Box
			py={isMobile ? 60 : 100}
			style={{
				width: '100vw',
				background: darkMode ? '#0a0a0a' : '#fafafa',
			}}
		>
			<Container size='lg'>
				{/* Section Header */}
				<Stack align='center' gap='md' mb={60}>
					<Badge size='lg' variant='light' color='violet'>
						Technologies
					</Badge>
					<Title
						order={2}
						size={isMobile ? 'h3' : 'h2'}
						ta='center'
						style={{
							color: darkMode ? '#ffffff' : '#000000',
						}}
					>
						Tech Stack & Tools
					</Title>
					<Text
						size='lg'
						ta='center'
						maw={600}
						style={{
							color: darkMode ? '#a0a0a0' : '#666666',
							lineHeight: 1.6,
						}}
					>
						Technologies and frameworks I use to build modern, scalable, and efficient
						applications
					</Text>
				</Stack>

				{/* Technologies Grid */}
				<SimpleGrid 
					cols={{ base: 4, sm: 5, md: 6, lg: 7 }} 
					spacing="xl"
					style={{ maxWidth: '100%' }}
				>
					{technologies.map((tech) => (
						<div
							key={tech.text}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '8px',
							}}
						>
							<Image
								src={tech.image}
								alt={tech.text}
								w={64}
								h={64}
								style={{
									filter: darkMode ? 'brightness(1)' : 'brightness(0.9)',
								}}
							/>
							<Text
								size="sm"
								fw={500}
								ta="center"
								style={{
									color: darkMode ? '#ffffff' : '#000000',
								}}
							>
								{tech.text}
							</Text>
						</div>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
}
