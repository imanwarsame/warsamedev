import { Box, Switch } from '@mui/material';
import { useDevStore } from '../../store';

export default function DarkModeToggle() {
	const { darkMode, setDarkMode } = useDevStore();

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Box component='div' sx={{ position: 'fixed', top: '2%', right: '2%', zIndex: 9999 }}>
			<Switch
				checked={darkMode}
				onChange={handleDarkModeToggle}
				name='darkModeToggle'
				inputProps={{ 'aria-label': 'toggle-dark-mode' }}
			/>
		</Box>
	);
}
