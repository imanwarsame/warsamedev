import { useMediaQuery } from '@mantine/hooks';
import { useDevStore } from '../../store';
import './DarkModeToggle.css';

export default function DarkModeToggle() {
	const { darkMode, setDarkMode } = useDevStore();
	const isMobile = useMediaQuery('(max-width: 768px)');

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<button
			className={`theme-toggle ${darkMode ? 'theme-toggle--dark' : ''}`}
			onClick={handleDarkModeToggle}
			style={{
				color: darkMode ? '#fafafa' : '#18181b',
				width: isMobile ? '1.8em' : '2.2em',
				height: isMobile ? '1.8em' : '2.2em',
			}}
			aria-label="Toggle dark mode"
		>
			<div className="theme-toggle__icon">
				<div className="sun-moon-toggle">
					<div className="sun">
						<div className="sun-rays"></div>
						<div className="sun-center"></div>
					</div>
					<div className="moon">
						<div className="moon-crater moon-crater-1"></div>
						<div className="moon-crater moon-crater-2"></div>
						<div className="moon-crater moon-crater-3"></div>
					</div>
				</div>
			</div>
		</button>
	);
}
