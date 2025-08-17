import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
	TextInput,
	Button,
	Box,
	Grid,
	Title,
	Text,
	Textarea,
	Container,
	Paper,
	Stack,
	Group,
	ActionIcon,
	ThemeIcon,
	Badge,
	SimpleGrid,
	useMantineTheme,
} from '@mantine/core';
import GlassIcons from '../glassIcons/GlassIcons';
import { motion, useInView } from 'framer-motion';
import {
	IconMail,
	IconBrandLinkedin,
	IconBrandGithub,
	IconMapPin,
	IconSend,
	IconCheck,
	IconCopy,
} from '@tabler/icons-react';
import { Element } from 'react-scroll';
import { notifications } from '@mantine/notifications';
import { useMediaQuery } from '@mantine/hooks';
import { useDevStore } from '../../store';

export default function Contact() {
	const theme = useMantineTheme();
	const { darkMode } = useDevStore();
	const form = useRef<HTMLFormElement>(null);
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const isMobile = useMediaQuery('(max-width: 768px)');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const currentYear = new Date().getFullYear();

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

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (form.current) {
			try {
				await emailjs.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					form.current,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				);

				form.current?.reset();
				notifications.show({
					title: 'Message Sent!',
					message: 'Thank you for reaching out. I will get back to you soon.',
					color: 'green',
					icon: <IconCheck size={16} />,
				});
			} catch (error) {
				notifications.show({
					title: 'Error',
					message: 'Failed to send message. Please try again or contact me directly.',
					color: 'red',
				});
			} finally {
				setIsSubmitting(false);
			}
		}
	};

	const copyEmail = () => {
		navigator.clipboard.writeText('hello@warsame.dev');
		notifications.show({
			title: 'Email Copied!',
			message: 'Email address has been copied to clipboard',
			color: 'green',
			icon: <IconCheck size={16} />,
		});
	};

	const contactInfo = [
		{
			icon: IconMail,
			title: 'Email',
			value: 'hello@warsame.dev',
			href: 'mailto:hello@warsame.dev',
			color: 'blue',
			showCopy: true,
		},
		{
			icon: IconBrandLinkedin,
			title: 'LinkedIn',
			value: '/in/imanwarsame',
			href: 'https://linkedin.com/in/imanwarsame',
			color: 'blue',
		},
		{
			icon: IconBrandGithub,
			title: 'GitHub',
			value: '/imanwarsame',
			href: 'https://github.com/imanwarsame',
			color: 'gray',
		},
		{
			icon: IconMapPin,
			title: 'Location',
			value: 'Copenhagen, Denmark',
			href: null,
			color: 'red',
		},
	];

	return (
		<Element name='contact_element'>
			<Box
				ref={ref}
				style={{
					width: '100vw',
					background: darkMode ? theme.other.background.default : theme.other.background.paper,
					paddingTop: isMobile ? '120px' : '140px',
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
									Contact
								</Badge>
								<Title
									order={2}
									size={isMobile ? 'h3' : 'h2'}
									ta='center'
									style={{
										color: darkMode ? theme.other.text.primary : theme.other.text.primary,
									}}
								>
									Let&apos;s Work Together
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
									Have a project in mind or want to discuss opportunities? I&apos;d love to hear
									from you. Let&apos;s create something amazing together.
								</Text>
							</Stack>
						</motion.div>

						{/* Contact Info Cards */}
						<motion.div variants={itemVariants}>
							<SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing='md' mb={30}>
								{contactInfo.map((info, index) => (
									<Paper
										key={index}
										component={info.href ? 'a' : 'div'}
										href={info.href || undefined}
										target={info.href ? '_blank' : undefined}
										rel={info.href ? 'noopener noreferrer' : undefined}
										p='lg'
										radius='lg'
										style={{
											background: darkMode ? theme.other.background.paper : theme.colors.white,
											border: `1px solid ${
												darkMode ? theme.other.border.light : theme.other.border.light
											}`,
											textDecoration: 'none',
											cursor: info.href ? 'pointer' : 'default',
											transition: 'all 0.3s ease',
											position: 'relative',
										}}
										onMouseEnter={(e: { currentTarget: { style: { transform: string } } }) => {
											if (info.href) {
												e.currentTarget.style.transform = 'translateY(-2px)';
											}
										}}
										onMouseLeave={(e: { currentTarget: { style: { transform: string } } }) => {
											if (info.href) {
												e.currentTarget.style.transform = 'translateY(0)';
											}
										}}
									>
										<Stack align='center' gap='sm'>
											<ThemeIcon size='lg' variant='light' color={info.color} radius='lg'>
												<info.icon size={20} />
											</ThemeIcon>
											<Stack gap={4} align='center'>
												<Text
													size='sm'
													fw={600}
													style={{
														color: darkMode ? theme.other.text.primary : theme.other.text.primary,
													}}
												>
													{info.title}
												</Text>
												<Group gap={4} align='center'>
													<Text size='xs' c='dimmed' ta='center'>
														{info.value}
													</Text>
													{info.showCopy && (
														<ActionIcon
															size='xs'
															variant='subtle'
															color='gray'
															onClick={(e) => {
																e.preventDefault();
																e.stopPropagation();
																copyEmail();
															}}
															style={{
																cursor: 'pointer',
															}}
														>
															<IconCopy size={12} />
														</ActionIcon>
													)}
												</Group>
											</Stack>
										</Stack>
									</Paper>
								))}
							</SimpleGrid>
						</motion.div>

						{/* Contact Form */}
						<motion.div variants={itemVariants}>
							<Paper
								p={isMobile ? 'lg' : 'xl'}
								radius='lg'
								style={{
									background: darkMode ? theme.other.background.paper : theme.colors.white,
									border: `1px solid ${
										darkMode ? theme.other.border.light : theme.other.border.light
									}`,
								}}
							>
								<Stack gap='lg'>
									<Stack align='center' gap='sm'>
										<ThemeIcon size={60} variant='light' color='blue' radius='50%'>
											<IconSend size={30} />
										</ThemeIcon>
										<Title
											order={3}
											ta='center'
											style={{
												color: darkMode ? theme.other.text.primary : theme.other.text.primary,
											}}
										>
											Send me a message
										</Title>
									</Stack>

									<form ref={form} onSubmit={sendEmail}>
										<Stack gap='md'>
											<Grid>
												<Grid.Col span={{ base: 12, md: 6 }}>
													<TextInput
														required
														type='text'
														name='user_name'
														id='user_name'
														label='Name'
														placeholder='Your full name'
														size='md'
														radius='md'
													/>
												</Grid.Col>
												<Grid.Col span={{ base: 12, md: 6 }}>
													<TextInput
														required
														type='email'
														name='user_email'
														id='user_email'
														label='Email'
														placeholder='your@email.com'
														size='md'
														radius='md'
													/>
												</Grid.Col>
											</Grid>

											<Textarea
												required
												name='message'
												id='message'
												label='Message'
												placeholder='Tell me about your project or just say hello...'
												rows={6}
												size='md'
												radius='md'
											/>

											<Group justify='center' mt='lg'>
												<Button
													type='submit'
													size='lg'
													leftSection={<IconSend size={20} />}
													loading={isSubmitting}
													style={{
														borderRadius: theme.radius.md,
													}}
												>
													{isSubmitting ? 'Sending...' : 'Send Message'}
												</Button>
											</Group>
										</Stack>
									</form>
								</Stack>
							</Paper>
						</motion.div>

						{/* Footer */}
						<motion.div variants={itemVariants}>
							<Stack align='center' gap='md' mt={30} mb={10}>
								<GlassIcons
									items={[
										{
											icon: <IconBrandGithub size={20} />,
											color: 'indigo',
											label: 'GitHub',
											customClass: 'social-icon',
											onClick: () => window.open('https://github.com/imanwarsame', '_blank'),
										},
										{
											icon: <IconBrandLinkedin size={20} />,
											color: 'blue',
											label: 'LinkedIn',
											customClass: 'social-icon',
											onClick: () => window.open('https://linkedin.com/in/imanwarsame', '_blank'),
										},
										{
											icon: <IconMail size={20} />,
											color: 'purple',
											label: 'Email',
											customClass: 'social-icon',
											onClick: () => window.open('mailto:hello@warsame.dev', '_blank'),
										},
									]}
									className="social-icons"
								/>
								<Text size='sm' c='dimmed' ta='center'>
									© {currentYear} Iman Warsame.
								</Text>
							</Stack>
						</motion.div>
					</motion.div>
				</Container>
			</Box>
		</Element>
	);
}
