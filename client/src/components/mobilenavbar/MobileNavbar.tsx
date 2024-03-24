import { motion } from 'framer-motion';
import { useState } from 'react';
import { AppBar, Stack, Toolbar, useTheme } from '@mui/material';
import NavBody from './NavBody';
import { useLocation, useNavigate } from 'react-router-dom';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import MenuButton from './MenuButton';
import { useDevStore } from '../../store';
import { scroller } from 'react-scroll';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';

export default function MobileNavbar() {
	const theme = useTheme();
	const { darkMode } = useDevStore();
	const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });
	const [isOpen, setOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const currentLocation = location.pathname;

	const links = [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'Articles',
			href: '/articles',
		},
	];

	/**
	 * The function `handleRouteChange` navigates to a new route and closes the menu (for mobile).
	 * @param {string} href - The `href` parameter in the `handleRouteChange` function is a string that
	 * represents the URL of the route that the application will navigate to.
	 */
	const handleRouteChange = (href: string) => {
		navigate(href);
		setOpen(false);
	};

	/**
	 * The scrollToElement function scrolls to a specified element with a smooth animation using specified
	 * duration and easing function.
	 * @param {string} elementName - The `elementName` parameter in the `scrollToElement` function is a
	 * string that represents the name or identifier of the element to which you want to scroll on the
	 * webpage.
	 */
	const scrollToElement = (elementName: string) => {
		scroller.scrollTo(elementName, {
			duration: 3000, //Duration of the scroll animation in milliseconds
			delay: 0, //Delay before scrolling begins in milliseconds
			smooth: 'easeInOutQuart', //Scrolling animation easing function
		});
	};

	return (
		<>
			<AppBar
				position='fixed'
				component={motion.div}
				sx={{
					boxShadow: 0,
					borderRadius: 0,
					backgroundImage:
						currentLocation === '/' || isOpen
							? 'none'
							: `radial-gradient(rgba(0, 0, 0, 0) 1px, ${theme.palette.background.default} 1px)`,
					backgroundSize: currentLocation === '/' || isOpen ? 'none' : '4px 4px',
					backgroundColor: 'transparent',
					backdropFilter: 'blur(3px)',
					zIndex: 2,
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<img
						src={darkMode ? LogoDark : LogoLight}
						height={50}
						width={50}
						style={{ top: 5, cursor: 'pointer' }}
						aria-label='IW-letters-logo'
						onClick={() => {
							if (currentLocation !== '/') {
								handleRouteChange('/');
							} else {
								scrollToElement('home_element');
							}
						}}
					/>
					<Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
						<DarkModeToggle />
						<MenuButton
							isOpen={isOpen}
							onClick={() => setOpen(!isOpen)}
							strokeWidth='6'
							color={theme.palette.text.primary}
							lineProps={{ strokeLinecap: 'round' }}
							transition={{ type: 'spring', stiffness: 260, damping: 20 }}
							width='24'
							height='24'
						/>
					</Stack>
				</Toolbar>
			</AppBar>
			<NavBody
				links={links}
				selectedLink={selectedLink}
				setSelectedLink={setSelectedLink}
				handleRouteChange={handleRouteChange}
				isOpen={isOpen}
			/>
		</>
	);
}
