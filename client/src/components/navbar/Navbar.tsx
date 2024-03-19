import { Hidden, Stack, useTheme } from '@mui/material';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';
import { scroller } from 'react-scroll';
import { useDevStore } from '../../store';
import NavigationLinks from './NavigationLinks';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import MenuButton from './MenuButton';
import { useState } from 'react';
import MobileNavbar from '../mobilenavbar/MobileNavbar';
import { AnimatePresence } from 'framer-motion';

export default function Navbar() {
	const { darkMode } = useDevStore();
	const [isOpen, setOpen] = useState(false);
	const theme = useTheme();
	const navigationHeaders = ['About', 'Projects', 'Experience', 'Contact', 'Articles'];

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

	console.log(isOpen);

	return (
		<>
			<Stack
				direction='row'
				spacing={2}
				aria-label='top-right-menu'
				sx={{
					position: 'fixed',
					top: { xs: '10px', md: '20px' },
					right: { xs: '15px', md: '20px' },
					display: 'flex',
					alignItems: 'center',
					zIndex: 3,
				}}
			>
				<DarkModeToggle />
				<Hidden mdUp>
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
				</Hidden>
			</Stack>
			<Stack
				direction='row'
				spacing={2}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 3,
					minWidth: 50,
					height: 'auto',
					top: { xs: '5px', md: '10px' },
					left: '1%',
					position: 'fixed',
				}}
			>
				<img
					src={darkMode ? LogoDark : LogoLight}
					height={50}
					width={50}
					style={{ top: 5, cursor: 'pointer' }}
					aria-label='IW-letters-logo'
					onClick={() => scrollToElement('home_element')}
				/>
				<Hidden mdDown>
					<NavigationLinks
						links={navigationHeaders}
						onClickHandler={(link) => scrollToElement(link.toLowerCase() + '_element')}
					/>
				</Hidden>
			</Stack>
			<Hidden mdUp>
				<AnimatePresence mode='wait'>{isOpen && <MobileNavbar />}</AnimatePresence>
			</Hidden>
		</>
	);
}
