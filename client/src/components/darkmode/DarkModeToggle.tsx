import { useMantineTheme } from '@mantine/core';
import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';
import { useDevStore } from '../../store';

export default function DarkModeToggle() {
	const { darkMode, setDarkMode } = useDevStore();
	const theme = useMantineTheme();

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Expand
			duration={750}
			toggled={darkMode}
			toggle={handleDarkModeToggle}
			style={{
				color: darkMode ? theme.colors.green[9] : theme.colors.green[9],
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
