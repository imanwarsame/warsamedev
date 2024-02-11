import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App.tsx';
import { lightTheme, darkTheme } from '../theme';

const darkMode: boolean = true;

const theme = darkMode ? darkTheme : lightTheme;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div>
			<ThemeProvider theme={theme}>
				{/* Globally resets CSS to create a baseline to build on. Enable color scheme allows 
				switching between "light" and "dark" modes of native components such as scrollbar */}
				<CssBaseline enableColorScheme />
				<App />
			</ThemeProvider>
		</div>
	</React.StrictMode>,
);
