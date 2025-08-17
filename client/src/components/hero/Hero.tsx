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
} from '@mantine/core';
import { motion, useInView } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload, IconArrowDown } from '@tabler/icons-react';
import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

export default function Hero() {
	const theme = useMantineTheme();
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });
	const isMobile = useMediaQuery('(max-width: 768px)');
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX / window.innerWidth,
				y: e.clientY / window.innerHeight,
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
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

	const floatingVariants = {
		animate: {
			y: [0, -10, 0],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<Box
			ref={ref}
			style={{
				minHeight: '100vh',
				width: '100vw',
				position: 'relative',
				background: theme.other.gradient.hero,
				overflow: 'hidden',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			{/* Animated Background */}
			<motion.div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					opacity: 0.1,
					background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
				}}
				animate={{
					scale: [1, 1.05, 1],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			
			{/* Floating Particles */}
			{!isMobile && (
				<>
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							style={{
								position: 'absolute',
								width: 4,
								height: 4,
								background: 'rgba(255,255,255,0.3)',
								borderRadius: '50%',
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								y: [0, -20, 0],
								opacity: [0.3, 0.8, 0.3],
							}}
							transition={{
								duration: 3 + Math.random() * 2,
								repeat: Infinity,
								delay: Math.random() * 2,
							}}
						/>
					))}
				</>
			)}

			<Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					<Stack align="center" gap="xl" py={isMobile ? 60 : 80}>
						{/* Main Title */}
						<motion.div variants={itemVariants}>
							<Title
								order={1}
								size={isMobile ? 'h2' : 'h1'}
								ta="center"
								style={{
									color: 'white',
									fontSize: isMobile ? '2.5rem' : '4rem',
									fontWeight: 700,
									lineHeight: 1.1,
									textShadow: '0 4px 20px rgba(0,0,0,0.3)',
								}}
							>
								Iman Warsame
							</Title>
						</motion.div>

						{/* Animated Role Text */}
						<motion.div variants={itemVariants}>
							<motion.div
								animate={{
									scale: [1, 1.02, 1],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								<Text
									size={isMobile ? 'lg' : 'xl'}
									ta="center"
									style={{
										color: 'rgba(255,255,255,0.9)',
										fontSize: isMobile ? '1.2rem' : '1.5rem',
										fontWeight: 500,
										textShadow: '0 2px 10px rgba(0,0,0,0.3)',
									}}
								>
									Full Stack Developer • Product Owner • Chartered Civil Engineer
								</Text>
							</motion.div>
						</motion.div>

						{/* Description */}
						<motion.div variants={itemVariants}>
							<Text
								size={isMobile ? 'md' : 'lg'}
								ta="center"
								maw={600}
								style={{
									color: 'rgba(255,255,255,0.8)',
									lineHeight: 1.6,
									textShadow: '0 2px 10px rgba(0,0,0,0.3)',
								}}
							>
								Creating innovative digital solutions that bridge engineering precision with modern technology. 
								Passionate about building products that make a meaningful impact.
							</Text>
						</motion.div>

						{/* CTA Buttons */}
						<motion.div variants={itemVariants}>
							<Group justify="center" gap="md">
								<Button
									size={isMobile ? 'md' : 'lg'}
									variant="white"
									leftSection={<IconMail size={20} />}
									style={{
										borderRadius: theme.radius.md,
										boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
									}}
								>
									Get In Touch
								</Button>
								<Button
									size={isMobile ? 'md' : 'lg'}
									variant="light"
									color="white"
									leftSection={<IconDownload size={20} />}
									style={{
										borderRadius: theme.radius.md,
										backgroundColor: 'rgba(255,255,255,0.1)',
										backdropFilter: 'blur(10px)',
										border: '1px solid rgba(255,255,255,0.2)',
									}}
								>
									Download CV
								</Button>
							</Group>
						</motion.div>

						{/* Social Links */}
						<motion.div variants={itemVariants}>
							<Group justify="center" gap="md" mt="md">
								{[
									{ icon: IconBrandGithub, href: 'https://github.com/imanwarsame' },
									{ icon: IconBrandLinkedin, href: 'https://linkedin.com/in/imanwarsame' },
									{ icon: IconMail, href: 'mailto:hello@warsame.dev' },
								].map((social, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
									>
										<ActionIcon
											component="a"
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											size="lg"
											variant="light"
											color="white"
											style={{
												backgroundColor: 'rgba(255,255,255,0.1)',
												backdropFilter: 'blur(10px)',
												border: '1px solid rgba(255,255,255,0.2)',
												borderRadius: theme.radius.md,
											}}
										>
											<social.icon size={20} />
										</ActionIcon>
									</motion.div>
								))}
							</Group>
						</motion.div>

						{/* Scroll Indicator */}
						<motion.div
							variants={floatingVariants}
							animate="animate"
							style={{ marginTop: 40 }}
						>
							<ActionIcon
								variant="transparent"
								size="xl"
								style={{
									color: 'rgba(255,255,255,0.7)',
								}}
							>
								<IconArrowDown size={24} />
							</ActionIcon>
						</motion.div>
					</Stack>
				</motion.div>
			</Container>

			{/* Decorative Elements */}
			<motion.div
				style={{
					position: 'absolute',
					top: '20%',
					right: '10%',
					width: 200,
					height: 200,
					background: 'rgba(255,255,255,0.05)',
					borderRadius: '50%',
					filter: 'blur(40px)',
				}}
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				style={{
					position: 'absolute',
					bottom: '30%',
					left: '15%',
					width: 150,
					height: 150,
					background: 'rgba(255,255,255,0.03)',
					borderRadius: '50%',
					filter: 'blur(30px)',
				}}
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.2, 0.5, 0.2],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
			/>
		</Box>
	);
}