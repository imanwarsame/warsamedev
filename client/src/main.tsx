import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App.tsx';
import { theme } from '../theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div>
			<ThemeProvider theme={theme}>
				{/* Globally resets CSS to create a baseline to build on */}
				<CssBaseline/>
				<App />
			</ThemeProvider>
		</div>
	</React.StrictMode>,
);