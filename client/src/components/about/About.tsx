import {
	Container,
	Title,
	Text,
	SimpleGrid,
	Paper,
	Stack,
	Group,
	ThemeIcon,
	Box,
	Badge,
	useMantineTheme,
} from '@mantine/core';
import { IconCode, IconUsers, IconBuilding, IconRocket, IconHeart } from '@tabler/icons-react';
import { useRef } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Element } from 'react-scroll';
import { useDevStore } from '../../store';
import CountUp from '../countUp/CountUp';

export default function About() {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();
	const ref = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery('(max-width: 768px)');

	const roles = [
		{
			icon: IconCode,
			title: 'Full Stack Developer',
			description:
				'Building scalable web applications with modern technologies. Passionate about clean code and an excellent user experience.',
			color: 'blue',
			skills: ['React', 'TypeScript', 'C#', 'Node.js', 'Python', 'CI/CD', 'Cloud Architecture'],
		},
		{
			icon: IconUsers,
			title: 'Product Owner',
			description:
				'Leading cross-functional teams to deliver innovative digital products. Expert in agile methodologies, stakeholder management, and translating business needs into technical solutions.',
			color: 'green',
			skills: [
				'Agile',
				'Scrum',
				'Stakeholder Management',
				'Technical Strategy',
				'Team Leadership',
			],
		},
		{
			icon: IconBuilding,
			title: 'Chartered Civil Engineer',
			description:
				'Using my knowledge from a Masters degree in Civil Engineering and as a Chartered Civil Engineer with the Institution of Civil Engineers, has given me the insight to build impactful technology for the built environment.',
			color: 'orange',
			skills: [
				'Project Management',
				'Digital Transformation',
				'Critical Thinking',
				'Problem Solving',
			],
		},
	];

	const stats = [
		{ label: 'Years Experience', value: 6, suffix: '+' },
		{ label: 'Major Software Projects Delivered', value: 8, suffix: '+' },
	];

	return (
		<Element name='about_element'>
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
						<Badge size='lg' variant='light' color={darkMode ? 'green' : 'blue'}>
							About Me
						</Badge>
						<Title
							order={2}
							size={isMobile ? 'h3' : 'h2'}
							ta='center'
							style={{
								color: darkMode ? '#ffffff' : '#000000',
							}}
						>
							Bridging Engineering & Technology
						</Title>
						<Text
							size='lg'
							ta='center'
							maw={700}
							style={{
								color: darkMode ? theme.other.text.secondary : theme.other.text.secondary,
								lineHeight: 1.6,
							}}
						>
							Hi! I&apos;m Iman, a multidisciplinary professional who combines technical expertise
							with engineering precision to create innovative digital solutions. My unique
							background spans software development, product management, and civil engineering.
						</Text>
					</Stack>

					{/* Stats */}
					<SimpleGrid
						cols={{ base: Math.min(stats.length, 2), sm: stats.length }}
						spacing='md'
						mb={60}
					>
						{stats.map((stat, index) => (
							<Paper
								key={index}
								p='md'
								radius='lg'
								style={{
									background: darkMode
										? theme.other.background.paper
										: theme.other.background.paper,
									border: `1px solid ${
										darkMode ? theme.other.border.light : theme.other.border.light
									}`,
									textAlign: 'center',
								}}
							>
								<Text
									size='xl'
									fw={700}
									style={{
										color: theme.colors.blue[6],
										fontSize: isMobile ? '1.5rem' : '2rem',
									}}
								>
									<CountUp to={stat.value} duration={2} delay={index * 0.2} />
									{stat.suffix}
								</Text>
								<Text size='sm' c='dimmed' fw={500}>
									{stat.label}
								</Text>
							</Paper>
						))}
					</SimpleGrid>

					{/* Professional Roles */}
					<SimpleGrid cols={{ base: 1, md: 3 }} spacing={isMobile ? 'md' : 'lg'}>
						{roles.map((role, index) => (
							<Paper
								key={index}
								p='xl'
								radius='lg'
								style={{
									height: '100%',
									background: darkMode
										? theme.other.background.paper
										: theme.other.background.paper,
									border: `1px solid ${
										darkMode ? theme.other.border.light : theme.other.border.light
									}`,
									transition: 'all 0.3s ease',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-4px)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
								}}
							>
								<Stack gap='md' h='100%'>
									<Group>
										<ThemeIcon
											size='xl'
											variant='light'
											color={darkMode ? 'gray' : role.color}
											radius='lg'
											style={{
												backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : undefined,
												color: darkMode ? '#ffffff' : undefined,
											}}
										>
											<role.icon size={28} />
										</ThemeIcon>
										<Title
											order={3}
											size='h4'
											style={{
												color: darkMode ? '#ffffff' : '#000000',
											}}
										>
											{role.title}
										</Title>
									</Group>

									<Text
										size='sm'
										style={{
											color: darkMode ? theme.other.text.secondary : theme.other.text.secondary,
											lineHeight: 1.6,
											flex: 1,
										}}
									>
										{role.description}
									</Text>

									<Stack gap='xs'>
										<Text size='xs' fw={600} c='dimmed' tt='uppercase'>
											Key Skills
										</Text>
										<Group gap='xs'>
											{role.skills.map((skill, skillIndex) => (
												<Badge
													key={skillIndex}
													size='xs'
													variant='outline'
													color={darkMode ? 'teal' : role.color}
												>
													{skill}
												</Badge>
											))}
										</Group>
									</Stack>
								</Stack>
							</Paper>
						))}
					</SimpleGrid>

					{/* Personal Touch */}
					<Paper
						p='xl'
						radius='lg'
						mt={60}
						style={{
							background: darkMode
								? `linear-gradient(135deg, ${theme.colors.blue[3]} 0%, ${theme.colors.purple[3]} 100%)`
								: theme.other.gradient.primary,
							color: 'white',
							textAlign: 'center',
						}}
					>
						<Stack align='center' gap='md'>
							<ThemeIcon
								size={60}
								variant='white'
								color={darkMode ? 'gray' : 'blue'}
								radius='50%'
								style={{
									backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.9)' : undefined,
									color: darkMode ? '#000000' : undefined,
								}}
							>
								<IconHeart size={30} />
							</ThemeIcon>
							<Title order={3} size='h4' style={{ color: darkMode ? 'white' : 'white' }}>
								Driven by Impact
							</Title>
							<Text
								size='lg'
								maw={600}
								style={{
									color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.9)',
									lineHeight: 1.6,
								}}
							>
								I&apos;m passionate about creating technology that makes a difference in the real
								world. Whether it&apos;s streamlining engineering workflows, building user-friendly
								applications, or leading teams to success, I believe in the power of thoughtful
								innovation to solve meaningful problems in the built environment.
							</Text>
							<Stack align='center' gap='xs' mt='md'>
								<IconRocket
									size={20}
									style={{ color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.8)' }}
								/>
								<Text
									size='sm'
									ta='center'
									style={{ color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.8)' }}
								>
									Currently building the future of engineering software at Ramboll
								</Text>
							</Stack>
						</Stack>
					</Paper>
				</Container>
			</Box>
		</Element>
	);
}
