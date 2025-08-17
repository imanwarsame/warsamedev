import { Group, Image, Box, useMantineTheme, Title } from '@mantine/core';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';
import { scroller } from 'react-scroll';
import { useDevStore } from '../../store';
import NavigationLinks from './NavigationLinks';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const theme = useMantineTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const currentLocation = location.pathname;
	const { darkMode } = useDevStore();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrolled(scrollTop > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
		<Box
			component={motion.div}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				height: 70,
				zIndex: 1000,
				backgroundColor: scrolled 
					? darkMode 
						? 'rgba(15, 15, 15, 0.9)' 
						: 'rgba(255, 255, 255, 0.9)'
					: 'transparent',
				backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
				border: 'none',
				boxShadow: 'none',
				transition: 'all 0.3s ease',
			}}
		>
			<Group h="100%" px="md" justify="space-between">
				<Group gap="sm">
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Group gap="xs" style={{ cursor: 'pointer' }}
							onClick={() => {
								if (currentLocation !== '/') {
									handleRouteChange('/');
								} else {
									scrollToElement('home_element');
								}
							}}
						>
							<Image
								src={darkMode ? LogoDark : LogoLight}
								h={40}
								w={40}
								alt="IW-letters-logo"
							/>
							<Title
								order={3}
								size="h4"
								style={{
									color: darkMode 
										? theme.other.text.primary 
										: theme.other.text.primary,
									fontWeight: 700,
								}}
							>
								Iman Warsame
							</Title>
						</Group>
					</motion.div>
					<NavigationLinks links={links} />
				</Group>
				<DarkModeToggle />
			</Group>
		</Box>
	);
}
