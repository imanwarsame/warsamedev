import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import NavBody from './NavBody';

interface MobileNavbarProps {
	handleRouteChange: (href: string) => void;
}

export default function MobileNavbar({ handleRouteChange }: MobileNavbarProps) {
	const theme = useTheme();
	const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

	useEffect(() => {
		//Disable scrolling on mount
		document.body.style.overflow = 'hidden';

		//Re-enable scrolling on unmount
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []); //Run only on component mount and unmount

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

	const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

	const height = {
		initial: {
			height: 0,
		},
		enter: {
			height: '100vh',
			transition,
		},
		exit: {
			height: 0,
			transition,
		},
	};

	return (
		<motion.div
			className='mobile_navbar'
			variants={height}
			initial='initial'
			animate='enter'
			exit='exit'
			style={{
				position: 'fixed',
				overflow: 'hidden',
				backgroundColor: theme.palette.secondary.main,
				width: '100vw',
				zIndex: 3,
				display: 'flex',
				gap: '50px',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<NavBody
				links={links}
				selectedLink={selectedLink}
				setSelectedLink={setSelectedLink}
				handleRouteChange={handleRouteChange}
			/>
		</motion.div>
	);
}
