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
import { motion, useInView } from 'framer-motion';
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
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const isMobile = useMediaQuery('(max-width: 768px)');

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	const roles = [
		{
			icon: IconCode,
			title: 'Full Stack Developer',
			description:
				'Building scalable web applications with modern technologies like React, TypeScript, and Node.js. Passionate about clean code, user experience, and performance optimization.',
			color: 'blue',
			skills: ['React/TypeScript', 'Node.js', 'Python', 'Database Design', 'Cloud Architecture'],
		},
		{
			icon: IconUsers,
			title: 'Product Owner',
			description:
				'Leading cross-functional teams to deliver innovative digital products. Expert in agile methodologies, stakeholder management, and translating business needs into technical solutions.',
			color: 'green',
			skills: [
				'Agile/Scrum',
				'Stakeholder Management',
				'User Research',
				'Technical Strategy',
				'Team Leadership',
			],
		},
		{
			icon: IconBuilding,
			title: 'Chartered Civil Engineer',
			description:
				'Applying engineering principles to solve complex infrastructure challenges. Specialized in digital transformation and sustainable engineering solutions for the built environment.',
			color: 'orange',
			skills: [
				'Structural Design',
				'Project Management',
				'Digital Transformation',
				'Sustainability',
				'Risk Assessment',
			],
		},
	];

	const stats = [
		{ label: 'Years Experience', value: 8, suffix: '+' },
		{ label: 'Projects Delivered', value: 50, suffix: '+' },
		{ label: 'Technologies Mastered', value: 20, suffix: '+' },
		{ label: 'Team Members Led', value: 15, suffix: '+' },
	];

	return (
		<Element name='about_element'>
			<Box
				ref={ref}
				py={isMobile ? 60 : 100}
				style={{
					width: '100vw',
					background: darkMode
						? `linear-gradient(135deg, ${theme.other.background.paper} 0%, ${theme.other.background.subtle} 100%)`
						: `linear-gradient(135deg, ${theme.other.background.paper} 0%, ${theme.colors.gray[0]} 100%)`,
				}}
			>
				<Container size='lg'>
					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
					>
						{/* Section Header */}
						<motion.div variants={itemVariants}>
							<Stack align='center' gap='md' mb={60}>
								<Badge size='lg' variant='light' color='blue'>
									About Me
								</Badge>
								<Title
									order={2}
									size={isMobile ? 'h3' : 'h2'}
									ta='center'
									style={{
										color: darkMode ? theme.other.text.primary : theme.other.text.primary,
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
									Hi! I&apos;m Iman, a multidisciplinary professional who combines technical
									expertise with engineering precision to create innovative digital solutions. My
									unique background spans software development, product management, and civil
									engineering.
								</Text>
							</Stack>
						</motion.div>

						{/* Stats */}
						<motion.div variants={itemVariants}>
							<SimpleGrid cols={{ base: 2, sm: 4 }} spacing='md' mb={60}>
								{stats.map((stat, index) => (
									<Paper
										key={index}
										p='md'
										radius='lg'
										style={{
											background: darkMode ? theme.other.background.paper : theme.colors.white,
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
						</motion.div>

						{/* Professional Roles */}
						<SimpleGrid cols={{ base: 1, md: 3 }} spacing={isMobile ? 'md' : 'lg'}>
							{roles.map((role, index) => (
								<motion.div key={index} variants={itemVariants}>
									<Paper
										p='xl'
										radius='lg'
										style={{
											height: '100%',
											background: darkMode ? theme.other.background.paper : theme.colors.white,
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
												<ThemeIcon size='xl' variant='light' color={role.color} radius='lg'>
													<role.icon size={28} />
												</ThemeIcon>
												<Title
													order={3}
													size='h4'
													style={{
														color: darkMode ? theme.other.text.primary : theme.other.text.primary,
													}}
												>
													{role.title}
												</Title>
											</Group>

											<Text
												size='sm'
												style={{
													color: darkMode
														? theme.other.text.secondary
														: theme.other.text.secondary,
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
														<Badge key={skillIndex} size='xs' variant='outline' color={role.color}>
															{skill}
														</Badge>
													))}
												</Group>
											</Stack>
										</Stack>
									</Paper>
								</motion.div>
							))}
						</SimpleGrid>

						{/* Personal Touch */}
						<motion.div variants={itemVariants}>
							<Paper
								p='xl'
								radius='lg'
								mt={60}
								style={{
									background: darkMode
										? `linear-gradient(135deg, ${theme.colors.blue[9]} 0%, ${theme.colors.purple[9]} 100%)`
										: theme.other.gradient.primary,
									color: 'white',
									textAlign: 'center',
								}}
							>
								<Stack align='center' gap='md'>
									<ThemeIcon size={60} variant='white' color='blue' radius='50%'>
										<IconHeart size={30} />
									</ThemeIcon>
									<Title order={3} size='h4' style={{ color: 'white' }}>
										Driven by Impact
									</Title>
									<Text
										size='lg'
										maw={600}
										style={{
											color: 'rgba(255,255,255,0.9)',
											lineHeight: 1.6,
										}}
									>
										I&apos;m passionate about creating technology that makes a real difference.
										Whether it&apos;s streamlining engineering workflows, building user-friendly
										applications, or leading teams to success, I believe in the power of thoughtful
										innovation to solve meaningful problems.
									</Text>
									<Group gap='xs' mt='md'>
										<IconRocket size={20} style={{ color: 'rgba(255,255,255,0.8)' }} />
										<Text size='sm' style={{ color: 'rgba(255,255,255,0.8)' }}>
											Currently building the future of engineering software at Ramboll
										</Text>
									</Group>
								</Stack>
							</Paper>
						</motion.div>
					</motion.div>
				</Container>
			</Box>
		</Element>
	);
}
