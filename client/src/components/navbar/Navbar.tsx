import { AppBar, Stack, Toolbar } from '@mui/material';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';
import { scroller } from 'react-scroll';
import { useDevStore } from '../../store';
import NavigationLinks from './NavigationLinks';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const currentLocation = location.pathname;
	const { darkMode } = useDevStore();

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

	/**
	 * The function `handleRouteChange` navigates to a new route and closes the menu (for mobile).
	 * @param {string} href - The `href` parameter in the `handleRouteChange` function is a string that
	 * represents the URL of the route that the application will navigate to.
	 */
	const handleRouteChange = (href: string) => {
		navigate(href);
	};

	const links = [
		{
			title: 'About',
			action: async () => {
				if (currentLocation !== '/') {
					await handleRouteChange('/');
					scrollToElement('about_element');
				} else {
					scrollToElement('about_element');
				}
			},
		},
		{
			title: 'Projects',
			action: async () => {
				if (currentLocation !== '/') {
					await handleRouteChange('/');
					scrollToElement('projects_element');
				} else {
					scrollToElement('projects_element');
				}
			},
		},
		{
			title: 'Experience',
			action: async () => {
				if (currentLocation !== '/') {
					await handleRouteChange('/');
					scrollToElement('experience_element');
				} else {
					scrollToElement('experience_element');
				}
			},
		},
		{
			title: 'Contact',
			action: async () => {
				if (currentLocation !== '/') {
					await handleRouteChange('/');
					scrollToElement('contact_element');
				} else {
					scrollToElement('contact_element');
				}
			},
		},
		{
			title: 'Articles',
			action: () => {
				if (currentLocation !== '/articles') {
					handleRouteChange('/articles');
				}
			},
		},
	];

	return (
		<AppBar
			position='fixed'
			component={motion.div}
			sx={{
				boxShadow: 0,
				borderRadius: 0,
				backgroundImage:'none',
				backgroundColor: 'transparent',
				backdropFilter: 'blur(20px)',
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
				<Stack direction='row' spacing={1}>
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
					<NavigationLinks links={links} />
				</Stack>
				<DarkModeToggle />
			</Toolbar>
		</AppBar>
	);
}
