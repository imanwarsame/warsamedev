import { Container, Title, Text, Badge, Stack, Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
	IconBrandReact,
	IconBrandTypescript,
	IconBrandJavascript,
	IconBrandCSharp,
	IconBrandPython,
	IconBrandMongodb,
	IconBrandNodejs,
	IconBrandGit,
	IconBrandFigma,
	IconBrandAzure,
	IconDatabase,
	IconBrandVite,
	IconBrandThreejs,
} from '@tabler/icons-react';
import type { Icon } from '@tabler/icons-react';
import { useDevStore } from '../../store';
import { LogoLoop } from '../logoLoop/LogoLoop';
import type { LogoItem } from '../logoLoop/LogoLoop';

interface TechData {
	name: string;
	icon: Icon;
	color: string;
	ariaLabel?: string;
}

// Helper function to create technology logo items with consistent styling
const createTechItem = (tech: TechData, darkMode: boolean, iconSize: number): LogoItem => ({
	node: (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '8px',
				transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
				position: 'relative',
				// Optimize for smooth animations
				transform: 'translate3d(0, 0, 0)',
				backfaceVisibility: 'hidden',
				WebkitFontSmoothing: 'antialiased',
			}}
		>
			<tech.icon size={iconSize} color={tech.color} />
			<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
				{tech.name}
			</Text>
		</div>
	),
	title: tech.name,
	ariaLabel: tech.ariaLabel || tech.name,
});

export default function Technologies() {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();
	const isMobile = useMediaQuery('(max-width: 768px)');

	const iconSize = 48;

	// Technology data array
	const technologiesData: TechData[] = [
		{ name: 'React', icon: IconBrandReact, color: '#61DAFB' },
		{ name: 'TypeScript', icon: IconBrandTypescript, color: '#3178C6' },
		{ name: 'JavaScript', icon: IconBrandJavascript, color: '#F7DF1E' },
		{ name: 'C#', icon: IconBrandCSharp, color: '#239120', ariaLabel: 'C# Programming Language' },
		{ name: 'Python', icon: IconBrandPython, color: '#3776AB' },
		{ name: 'MongoDB', icon: IconBrandMongodb, color: '#47A248' },
		{ name: 'Node.js', icon: IconBrandNodejs, color: '#339933' },
		{ name: 'Git', icon: IconBrandGit, color: '#F05032' },
		{ name: 'Figma', icon: IconBrandFigma, color: '#F24E1E' },
		{ name: 'SQL', icon: IconDatabase, color: '#336791' },
		{ name: 'Azure', icon: IconBrandAzure, color: '#007ACC' },
		{ name: 'Vite', icon: IconBrandVite, color: '#007ACC' },
		{ name: 'Three.js', icon: IconBrandThreejs, color: '#007ACC' },
	];

	// Generate logo items from the data array
	const technologiesLogos: LogoItem[] = technologiesData.map((tech) =>
		createTechItem(tech, darkMode, iconSize),
	);

	return (
		<Box
			py={isMobile ? 60 : 100}
			style={{
				width: '100vw',
				background: darkMode ? theme.other.background.default : theme.other.background.default,
			}}
		>
			<Container size='lg'>
				{/* Section Header */}
				<Stack align='center' gap='md' mb={60}>
					<Badge size='lg' variant='light' color={darkMode ? 'yellow' : 'violet'}>
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
						Technologies and frameworks I use to build modern, scalable, and efficient applications
					</Text>
				</Stack>

				{/* Technologies Loop */}
				<LogoLoop
					logos={technologiesLogos}
					speed={40}
					direction='left'
					logoHeight={48}
					gap={40}
					pauseOnHover={true}
					scaleOnHover={true}
					fadeOut={true}
					fadeOutColor={darkMode ? '#0f0f0f' : '#ffffff'}
					ariaLabel='Technologies and tools'
				/>
			</Container>
		</Box>
	);
}
