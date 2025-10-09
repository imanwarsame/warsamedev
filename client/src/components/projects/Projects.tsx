import {
	Container,
	Title,
	Text,
	SimpleGrid,
	Paper,
	Image,
	Badge,
	Group,
	ActionIcon,
	Box,
	Stack,
	Button,
	Modal,
	useMantineTheme,
	Overlay,
} from '@mantine/core';
import {
	IconExternalLink,
	IconBrandGithub,
	IconEye,
	IconX,
	IconPlayerPlay,
	IconBrandYoutube,
} from '@tabler/icons-react';
import { useRef, useState } from 'react';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { projects } from './ProjectsData';
import { useDevStore } from '../../store';
import { v4 as uuidv4 } from 'uuid';

export interface Project {
	title: string;
	imageUrl: string | null;
	webLink?: string | null;
	githubLink?: string | null;
	description?: string;
	technologies?: string[];
	/** Video URL - supports both local video files (e.g., '/videos/demo.mp4') and YouTube URLs (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID') */
	videoUrl?: string | null;
}

// Helper functions for video handling
const isYouTubeUrl = (url: string): boolean => {
	return url.includes('youtube.com') || url.includes('youtu.be');
};

const getYouTubeEmbedUrl = (url: string): string => {
	try {
		// Handle different YouTube URL formats
		if (url.includes('youtube.com/watch?v=')) {
			const videoId = url.split('v=')[1]?.split('&')[0];
			if (videoId) {
				return `https://www.youtube.com/embed/${videoId}`;
			}
		} else if (url.includes('youtu.be/')) {
			const videoId = url.split('youtu.be/')[1]?.split('?')[0];
			if (videoId) {
				return `https://www.youtube.com/embed/${videoId}`;
			}
		} else if (url.includes('youtube.com/embed/')) {
			return url; // Already in embed format
		}
	} catch (error) {
		console.warn('Failed to parse YouTube URL:', url, error);
	}
	return url;
};

interface ProjectDetailModalProps {
	project: Project | null;
	opened: boolean;
	onClose: () => void;
}

function ProjectDetailModal({ project, opened, onClose }: ProjectDetailModalProps) {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();

	if (!project) return null;

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			size='xl'
			padding='xl'
			centered
			withCloseButton={false}
			zIndex={1000}
			overlayProps={{
				backgroundOpacity: 0.8,
				blur: 3,
			}}
		>
			<Box>
				<Group justify='space-between' mb='lg'>
					<Title order={2} size='h3'>
						{project.title}
					</Title>
					<ActionIcon
						variant='subtle'
						color={darkMode ? 'white' : 'gray'}
						onClick={onClose}
						size='lg'
					>
						<IconX size={20} />
					</ActionIcon>
				</Group>

				{/* Project Video/Image */}
				<Box mb='lg' style={{ position: 'relative' }}>
					{project.videoUrl ? (
						<Box
							style={{
								position: 'relative',
								paddingBottom: '56.25%',
								height: 0,
								overflow: 'hidden',
							}}
						>
							{isYouTubeUrl(project.videoUrl) ? (
								<iframe
									src={getYouTubeEmbedUrl(project.videoUrl)}
									title={project.title}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
										borderRadius: theme.radius.md,
										border: 'none',
									}}
								/>
							) : (
								<video
									controls
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
										borderRadius: theme.radius.md,
									}}
								>
									<source src={project.videoUrl} type='video/mp4' />
									Your browser does not support the video tag.
								</video>
							)}
						</Box>
					) : (
						project.imageUrl && (
							<Image src={project.imageUrl} alt={project.title} radius='md' h={300} fit='cover' />
						)
					)}
				</Box>

				{/* Project Details */}
				<Stack gap='md'>
					<Text size='lg' style={{ lineHeight: 1.6 }}>
						{project.description}
					</Text>

					{project.technologies && (
						<Group gap='xs'>
							{project.technologies.map((tech: string, index: number) => (
								<Badge key={index} variant='light' size='md' color={darkMode ? 'indigo' : 'blue'}>
									{tech}
								</Badge>
							))}
						</Group>
					)}

					<Group gap='md' mt='lg'>
						{project.webLink && (
							<Button
								component='a'
								href={project.webLink}
								target='_blank'
								rel='noopener noreferrer'
								leftSection={<IconExternalLink size={16} />}
								variant='filled'
							>
								View Live
							</Button>
						)}
						{project.githubLink && (
							<Button
								component='a'
								href={project.githubLink}
								target='_blank'
								rel='noopener noreferrer'
								leftSection={<IconBrandGithub size={16} />}
								variant='outline'
							>
								View Code
							</Button>
						)}
					</Group>
				</Stack>
			</Box>
		</Modal>
	);
}

export default function Projects() {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();
	const ref = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery('(max-width: 768px)');
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [opened, { open, close }] = useDisclosure(false);

	// Color schemes for projects without images
	const projectColourSchemes = [
		{
			background: darkMode
				? 'linear-gradient(135deg, #1e2a1e 0%, #334433 100%)'
				: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
			text: darkMode ? '#86efac' : '#166534',
		},
		{
			background: darkMode
				? 'linear-gradient(135deg, #1e2a2d 0%, #334a55 100%)'
				: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
			text: darkMode ? '#7dd3fc' : '#0c4a6e',
		},
		{
			background: darkMode
				? 'linear-gradient(135deg, #2d2a1e 0%, #4a4433 100%)'
				: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
			text: darkMode ? '#fbbf24' : '#92400e',
		},
		{
			background: darkMode
				? 'linear-gradient(135deg, #2a1e2d 0%, #443355 100%)'
				: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
			text: darkMode ? '#c084fc' : '#7c3aed',
		},
	];

	const getProjectColourScheme = (projectTitle: string) => {
		// Use a hash-like function to consistently assign colors based on project title
		const hash = projectTitle.split('').reduce((a, b) => {
			a = (a << 5) - a + b.charCodeAt(0);
			return a & a;
		}, 0);

		const colorIndex = Math.abs(hash) % projectColourSchemes.length;
		return projectColourSchemes[colorIndex];
	};

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		open();
	};

	return (
		<Box
			ref={ref}
			py={isMobile ? 60 : 100}
			style={{
				width: '100vw',
				background: darkMode ? theme.other.background.default : theme.other.background.default,
			}}
		>
			<Container size='lg'>
				{/* Section Header */}
				<Stack align='center' gap='md' mb={60}>
					<Badge size='lg' variant='light' color={darkMode ? 'cyan' : 'blue'}>
						Projects
					</Badge>
					<Title
						order={2}
						size={isMobile ? 'h3' : 'h2'}
						ta='center'
						style={{
							color: darkMode ? theme.other.text.primary : theme.other.text.primary,
						}}
					>
						Featured Work
					</Title>
					<Text
						size='lg'
						ta='center'
						maw={600}
						style={{
							color: darkMode ? theme.other.text.secondary : theme.other.text.secondary,
							lineHeight: 1.6,
						}}
					>
						A collection of projects showcasing my expertise in full-stack development, product
						management, and engineering solutions.
					</Text>
				</Stack>

				{/* Projects Grid */}
				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={isMobile ? 'md' : 'lg'}>
					{projects.map((project) => (
						<Paper
							key={uuidv4()}
							radius='lg'
							style={{
								overflow: 'hidden',
								cursor: 'pointer',
								transition: 'all 0.3s ease',
								background: darkMode ? theme.other.background.paper : theme.other.background.paper,
								border: `1px solid ${
									darkMode ? theme.other.border.light : theme.other.border.light
								}`,
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-4px)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
							}}
							onClick={() => handleProjectClick(project)}
						>
							{/* Project Image */}
							<Box style={{ position: 'relative' }}>
								{project.imageUrl ? (
									<Image src={project.imageUrl} alt={project.title} h={200} fit='cover' />
								) : (
									(() => {
										const colorScheme = getProjectColourScheme(project.title);
										return (
											<Box
												h={200}
												style={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													background: colorScheme.background,
													border: `1px solid ${
														darkMode ? theme.other.border.light : theme.other.border.light
													}`,
												}}
											>
												<Title
													order={1}
													ta='center'
													px='md'
													style={{
														color: colorScheme.text,
														textShadow: darkMode
															? '0 1px 2px rgba(0,0,0,0.3)'
															: '0 1px 2px rgba(255,255,255,0.3)',
													}}
												>
													{project.title}
												</Title>
											</Box>
										);
									})()
								)}
								<Overlay
									color='#000'
									opacity={0}
									style={{
										transition: 'opacity 0.3s ease',
									}}
								/>
								<Box
									style={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
										opacity: 0,
										transition: 'opacity 0.3s ease',
									}}
								>
									<ActionIcon
										size='xl'
										variant='filled'
										color={darkMode ? 'white' : 'blue'}
										style={{
											borderRadius: '50%',
										}}
									>
										<IconEye size={24} />
									</ActionIcon>
								</Box>
							</Box>

							{/* Project Content */}
							<Stack gap='sm' p='md'>
								{project.description && (
									<Text size='sm' c='dimmed' lineClamp={2} style={{ lineHeight: 1.5 }}>
										{project.description}
									</Text>
								)}

								{project.technologies && (
									<Group gap='xs' mt='xs'>
										{project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
											<Badge
												key={techIndex}
												size='xs'
												variant='outline'
												color={darkMode ? 'lime' : 'blue'}
											>
												{tech}
											</Badge>
										))}
										{project.technologies.length > 3 && (
											<Badge size='xs' variant='outline' color={darkMode ? 'grape' : 'gray'}>
												+{project.technologies.length - 3}
											</Badge>
										)}
									</Group>
								)}

								{/* Action Buttons */}
								<Group gap='xs' mt='md'>
									{project.webLink && (
										<ActionIcon
											component='a'
											href={project.webLink}
											target='_blank'
											rel='noopener noreferrer'
											variant='light'
											color={darkMode ? 'white' : 'blue'}
											onClick={(e) => e.stopPropagation()}
										>
											<IconExternalLink size={16} />
										</ActionIcon>
									)}
									{project.githubLink && (
										<ActionIcon
											component='a'
											href={project.githubLink}
											target='_blank'
											rel='noopener noreferrer'
											variant='light'
											color={darkMode ? 'white' : 'gray'}
											onClick={(e) => e.stopPropagation()}
										>
											<IconBrandGithub size={16} />
										</ActionIcon>
									)}
									{project.videoUrl && (
										<ActionIcon
											variant='light'
											color={isYouTubeUrl(project.videoUrl) ? 'red' : darkMode ? 'white' : 'green'}
										>
											{isYouTubeUrl(project.videoUrl) ? (
												<IconBrandYoutube size={16} />
											) : (
												<IconPlayerPlay size={16} />
											)}
										</ActionIcon>
									)}
								</Group>
							</Stack>
						</Paper>
					))}
				</SimpleGrid>
			</Container>

			{/* Project Detail Modal */}
			<ProjectDetailModal project={selectedProject} opened={opened} onClose={close} />
		</Box>
	);
}
