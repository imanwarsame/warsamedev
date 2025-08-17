import {
	Container,
	Title,
	Text,
	Button,
	Group,
	Box,
	Stack,
	useMantineTheme,
	ActionIcon,
	useMantineColorScheme,
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import Iridescence from '../iridescence/Iridescence';
import DecryptedText from '../decryptedText/DecryptedText';
import Lottie from 'lottie-react';
import animatedScrollDark from '../../assets/scroll-down-dark.json';
import animatedScrollLight from '../../assets/scroll-down-light.json';

export default function Hero() {
	const theme = useMantineTheme();
	const { colorScheme } = useMantineColorScheme();
	const isMobile = useMediaQuery('(max-width: 768px)');

	// Different colors for light and dark modes
	const iridescenceColor: [number, number, number] =
		colorScheme === 'dark'
			? [0.1, 0.15, 0.3] // Deep dark blue-gray for dark mode
			: [0.85, 0.9, 1.0]; // Soft blue-white for light mode

	return (
		<Box
			style={{
				minHeight: '100vh',
				width: '100vw',
				position: 'relative',
				overflow: 'hidden',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			{/* Iridescence Background */}
			<Box
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: 0,
				}}
			>
				<Iridescence color={iridescenceColor} speed={0.3} amplitude={0.05} mouseReact={false} />
			</Box>

			<Container size='lg' style={{ position: 'relative', zIndex: 1 }}>
				<Stack align='center' gap='xl' py={isMobile ? 60 : 80}>
					{/* Main Title */}
					<Title
						order={1}
						size={isMobile ? 'h2' : 'h1'}
						ta='center'
						style={{
							color: colorScheme === 'dark' ? 'white' : 'black',
							fontSize: isMobile ? '2.5rem' : '4rem',
							fontWeight: 700,
							lineHeight: 1.1,
						}}
					>
						Iman Warsame
					</Title>

					{/* Role Text */}
					<Text
						size={isMobile ? 'lg' : 'xl'}
						ta='center'
						style={{
							color: colorScheme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)',
							fontSize: isMobile ? '1.2rem' : '1.5rem',
							fontWeight: 500,
						}}
					>
						<DecryptedText
							text='Full Stack Developer'
							animateOn='view'
							speed={50}
							maxIterations={12}
							sequential={true}
							revealDirection='start'
							useOriginalCharsOnly={true}
						/>
						{' | '}
						<DecryptedText
							text='Product Owner'
							animateOn='view'
							speed={70}
							maxIterations={12}
							sequential={true}
							revealDirection='start'
							useOriginalCharsOnly={true}
						/>
						{' | '}
						<DecryptedText
							text='Chartered Civil Engineer'
							animateOn='view'
							speed={80}
							maxIterations={12}
							sequential={true}
							revealDirection='start'
							useOriginalCharsOnly={true}
						/>
					</Text>

					{/* CTA Buttons */}
					<Group justify='center' gap='md'>
						<Button
							size={isMobile ? 'md' : 'lg'}
							variant={colorScheme === 'dark' ? 'white' : 'filled'}
							color={colorScheme === 'dark' ? undefined : 'dark'}
							leftSection={<IconMail size={20} />}
							style={{
								borderRadius: theme.radius.md,
							}}
						>
							Get In Touch
						</Button>
						<Button
							size={isMobile ? 'md' : 'lg'}
							variant='light'
							color={colorScheme === 'dark' ? 'white' : 'dark'}
							leftSection={<IconDownload size={20} />}
							style={{
								borderRadius: theme.radius.md,
								backgroundColor:
									colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
								backdropFilter: 'blur(10px)',
								border:
									colorScheme === 'dark'
										? '1px solid rgba(255,255,255,0.2)'
										: '1px solid rgba(0,0,0,0.2)',
							}}
						>
							Download CV
						</Button>
					</Group>
				</Stack>
			</Container>

			{/* Bottom Section - Social Icons and Scroll Indicator */}
			<Box
				style={{
					position: 'absolute',
					bottom: '20px',
					left: '50%',
					transform: 'translateX(-50%)',
					zIndex: 2,
				}}
			>
				<Stack align='center' gap='sm'>
					{/* Social Links */}
					<Group justify='center' gap='md'>
						{[
							{ icon: IconBrandGithub, href: 'https://github.com/imanwarsame' },
							{ icon: IconBrandLinkedin, href: 'https://linkedin.com/in/imanwarsame' },
							{ icon: IconMail, href: 'mailto:hello@warsame.dev' },
						].map((social, index) => (
							<ActionIcon
								key={index}
								component='a'
								href={social.href}
								target='_blank'
								rel='noopener noreferrer'
								size='lg'
								variant='light'
								color={colorScheme === 'dark' ? 'white' : 'dark'}
								style={{
									backgroundColor:
										colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
									backdropFilter: 'blur(10px)',
									border:
										colorScheme === 'dark'
											? '1px solid rgba(255,255,255,0.2)'
											: '1px solid rgba(0,0,0,0.2)',
									borderRadius: theme.radius.md,
								}}
							>
								<social.icon size={20} />
							</ActionIcon>
						))}
					</Group>

					{/* Scroll Indicator */}
					<Lottie
						animationData={colorScheme === 'dark' ? animatedScrollLight : animatedScrollDark}
						height={200}
						width={200}
						style={{ color: 'orange' }}
					/>
				</Stack>
			</Box>
		</Box>
	);
}
