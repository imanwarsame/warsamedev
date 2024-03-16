import { Stack } from '@mui/material';
import LogoLight from '../../assets/logo_light_mode.png';
import LogoDark from '../../assets/logo_dark_mode.png';
import { scroller } from 'react-scroll';
import { useDevStore } from '../../store';
import NavigationLinks from './NavigationLinks';

export default function Sidebar() {
	const { darkMode } = useDevStore();
	const navigationHeaders = ['Articles', 'Experience', 'Projects', 'Contact'];

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
		<Stack
			direction='row'
			spacing={2}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 99,
				width: 'auto',
				minWidth: 50,
				height: 'auto',
				top: '1%',
				position: 'fixed',
				border: '0px solid yellow',
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
			<NavigationLinks links={navigationHeaders} />
		</Stack>
	);
}
