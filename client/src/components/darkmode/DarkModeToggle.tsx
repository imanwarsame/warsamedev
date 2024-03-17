import { useTheme } from '@mui/material';
import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';
import { useDevStore } from '../../store';

export default function DarkModeToggle() {
	const { darkMode, setDarkMode } = useDevStore();
	const theme = useTheme();

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Expand
			duration={750}
			toggled={darkMode}
			toggle={handleDarkModeToggle}
			style={{
				color: theme.palette.text.primary,
			}}
		>
			<style>
				{`
						.theme-toggle__expand {
						height: 3em;
						width: 3em;
						}
					`}
			</style>
		</Expand>
	);
}
