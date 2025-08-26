import { Image, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';
import { useDevStore } from '../../store';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import { useLocation, useNavigate } from 'react-router-dom';
import GlassSurface from '../glassSurface/GlassSurface';

export default function GlassNavbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const currentLocation = location.pathname;
	const { darkMode } = useDevStore();
	const isMobile = useMediaQuery('(max-width: 768px)');

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
			<GlassSurface
				width={isMobile ? '90vw' : '85vw'}
				height={isMobile ? 60 : 80}
				borderRadius={isMobile ? 30 : 40}
				className='glass-navbar'
				backgroundOpacity={0.4}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					boxShadow: 'none',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: isMobile ? '0 16px' : '0 32px',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: isMobile ? '8px' : '16px',
						}}
					>
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
								h={isMobile ? 32 : 42}
								w={isMobile ? 32 : 42}
								alt='IW-letters-logo'
							/>
						</div>

						<div
							style={{
								padding: isMobile ? '6px 12px' : '10px 20px',
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
								order={isMobile ? 5 : 4}
								size={isMobile ? 'md' : 'lg'}
								style={{
									color: darkMode ? '#fafafa' : '#18181b',
									fontWeight: 700,
								}}
							>
								Articles
							</Title>
						</div>
					</div>

					<DarkModeToggle />
				</div>
			</GlassSurface>
		</div>
	);
}
