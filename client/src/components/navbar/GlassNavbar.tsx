import { Image, Title } from '@mantine/core';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';
import { useDevStore } from '../../store';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import GlassSurface from '../glassSurface/GlassSurface';

export default function GlassNavbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const currentLocation = location.pathname;
	const { darkMode } = useDevStore();

	const handleRouteChange = (href: string) => {
		navigate(href);
	};

	return (
		<div
			style={{
				position: 'fixed',
				top: 20,
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: 1000,
			}}
		>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<GlassSurface
					width='85vw'
					height={80}
					borderRadius={40}
					className='glass-navbar'
					distortionScale={-90}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							width: '100%',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '0 32px',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '16px',
							}}
						>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<div
									style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
									onClick={() => {
										if (currentLocation !== '/') {
											handleRouteChange('/');
										}
									}}
								>
									<Image
										src={darkMode ? LogoDark : LogoLight}
										h={36}
										w={36}
										alt='IW-letters-logo'
									/>
								</div>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								style={{
									padding: '10px 20px',
									borderRadius: '24px',
									cursor: 'pointer',
									backgroundColor:
										currentLocation === '/articles'
											? darkMode
												? 'rgba(255, 255, 255, 0.1)'
												: 'rgba(0, 0, 0, 0.1)'
											: 'transparent',
									transition: 'all 0.2s ease',
									display: 'flex',
									alignItems: 'center',
								}}
								onClick={() => {
									if (currentLocation !== '/articles') {
										handleRouteChange('/articles');
									}
								}}
							>
								<Title
									order={5}
									size='md'
									style={{
										color: darkMode ? '#ffffff' : '#000000',
										fontWeight: 500,
									}}
								>
									Articles
								</Title>
							</motion.div>
						</div>

						<DarkModeToggle />
					</div>
				</GlassSurface>
			</motion.div>
		</div>
	);
}
