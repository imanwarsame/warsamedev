import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';
import { useDevStore } from '../../store';

export default function DarkModeToggle() {
	const { darkMode, setDarkMode } = useDevStore();

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
						height: 2.2em;
						width: 2.2em;
						}
					`}
			</style>
		</Expand>
	);
}
