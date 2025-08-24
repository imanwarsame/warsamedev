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
import { useDevStore } from '../../store';
import { LogoLoop } from '../logoLoop/LogoLoop';
import type { LogoItem } from '../logoLoop/LogoLoop';

export default function Technologies() {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();
	const isMobile = useMediaQuery('(max-width: 768px)');

	const iconSize = 48;

	const technologiesLogos: LogoItem[] = [
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandReact size={iconSize} color='#61DAFB' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						React
					</Text>
				</div>
			),
			title: 'React',
			ariaLabel: 'React',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandTypescript size={iconSize} color='#3178C6' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						TypeScript
					</Text>
				</div>
			),
			title: 'TypeScript',
			ariaLabel: 'TypeScript',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandJavascript size={iconSize} color='#F7DF1E' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						JavaScript
					</Text>
				</div>
			),
			title: 'JavaScript',
			ariaLabel: 'JavaScript',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandCSharp size={iconSize} color='#239120' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						C#
					</Text>
				</div>
			),
			title: 'C#',
			ariaLabel: 'C# Programming Language',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandPython size={iconSize} color='#3776AB' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						Python
					</Text>
				</div>
			),
			title: 'Python',
			ariaLabel: 'Python',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandMongodb size={iconSize} color='#47A248' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						MongoDB
					</Text>
				</div>
			),
			title: 'MongoDB',
			ariaLabel: 'MongoDB',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandNodejs size={iconSize} color='#339933' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						Node.js
					</Text>
				</div>
			),
			title: 'Node.js',
			ariaLabel: 'Node.js',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandGit size={iconSize} color='#F05032' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						Git
					</Text>
				</div>
			),
			title: 'Git',
			ariaLabel: 'Git',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandFigma size={iconSize} color='#F24E1E' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						Figma
					</Text>
				</div>
			),
			title: 'Figma',
			ariaLabel: 'Figma',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconDatabase size={iconSize} color='#336791' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						SQL
					</Text>
				</div>
			),
			title: 'SQL',
			ariaLabel: 'SQL',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandAzure size={iconSize} color='#007ACC' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						Azure
					</Text>
				</div>
			),
			title: 'Azure',
			ariaLabel: 'Azure',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandVite size={iconSize} color='#007ACC' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						Vite
					</Text>
				</div>
			),
			title: 'Vite',
			ariaLabel: 'Vite',
		},
		{
			node: (
				<div
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
				>
					<IconBrandThreejs size={iconSize} color='#007ACC' />
					<Text size='xs' fw={500} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
						Three.js
					</Text>
				</div>
			),
			title: 'Three.js',
			ariaLabel: 'Three.js',
		},
	];

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
