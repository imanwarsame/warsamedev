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
	ThemeIcon,
	Badge,
	useMantineTheme,
} from '@mantine/core';
import GlassIcons from '../glassIcons/GlassIcons';
import { motion, useInView } from 'framer-motion';
import {
	IconMail,
	IconBrandLinkedin,
	IconBrandGithub,
	IconSend,
	IconCheck,
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
					import.meta.env.VITE_EMAILJS_SRVCE_ID,
					import.meta.env.VITE_EMAILJS_TPLTE_ID,
					form.current,
					import.meta.env.VITE_EMAILJS_PUB_KEY,
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

	return (
		<Element name='contact_element'>
			<Box
				ref={ref}
				style={{
					width: '100vw',
					minHeight: '100vh',
					background: darkMode ? theme.other.background.default : theme.other.background.default,
					paddingTop: isMobile ? '120px' : '140px',
					paddingBottom: '0',
					marginBottom: '0',
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
								<Badge size='lg' variant='light' color={darkMode ? 'pink' : 'blue'}>
									Contact
								</Badge>
								<Title
									order={2}
									size={isMobile ? 'h3' : 'h2'}
									ta='center'
									style={{
										color: darkMode ? '#ffffff' : '#000000',
									}}
								>
									Let&apos;s Work Together
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
									Have a project in mind or want to discuss opportunities? I&apos;d love to hear
									from you. Let&apos;s create something amazing together.
								</Text>
							</Stack>
						</motion.div>

						{/* Contact Form */}
						<motion.div variants={itemVariants}>
							<Paper
								p={isMobile ? 'lg' : 'xl'}
								radius='lg'
								style={{
									background: darkMode
										? theme.other.background.paper
										: theme.other.background.paper,
									border: `1px solid ${
										darkMode ? theme.other.border.light : theme.other.border.light
									}`,
								}}
							>
								<Stack gap='sm' justify='center'>
									<Group justify='center' gap='sm'>
										<ThemeIcon
											size={60}
											variant='light'
											color={darkMode ? 'gray' : 'blue'}
											radius='50%'
											style={{
												backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : undefined,
												color: darkMode ? '#ffffff' : undefined,
											}}
										>
											<IconSend size={30} />
										</ThemeIcon>
										<Title
											order={3}
											ta='center'
											style={{
												color: darkMode ? '#ffffff' : '#000000',
											}}
										>
											Send me a message
										</Title>
									</Group>

									<form ref={form} onSubmit={sendEmail}>
										<Stack gap='sm'>
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
												size='sm'
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
							<Stack align='center' gap='md' mt={30} mb={0} pb={20}>
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
											onClick: () => window.open('mailto:iwarsame38@gmail.com', '_blank'),
										},
									]}
									className='social-icons'
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
