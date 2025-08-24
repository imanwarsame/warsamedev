import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';
import { useMediaQuery } from '@mantine/hooks';
import { useDevStore } from '../../store';

export default function DarkModeToggle() {
	const { darkMode, setDarkMode } = useDevStore();
	const isMobile = useMediaQuery('(max-width: 768px)');

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Expand
			duration={750}
			toggled={darkMode}
			toggle={handleDarkModeToggle}
			style={{
				color: darkMode ? '#fafafa' : '#18181b',
				margin: 0,
				padding: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<style>
				{`
						.theme-toggle__expand {
						height: ${isMobile ? '1.8em' : '2.2em'};
						width: ${isMobile ? '1.8em' : '2.2em'};
						}
					`}
			</style>
		</Expand>
	);
}
