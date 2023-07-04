import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App.tsx';
import { lightTheme } from '../theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div>
			<ThemeProvider theme={lightTheme}>
				{/* Globally resets CSS to create a baseline to build on */}
				<CssBaseline/>
				<App />
			</ThemeProvider>
		</div>
	</React.StrictMode>,
);