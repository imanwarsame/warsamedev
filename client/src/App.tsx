import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import GlassNavbar from './components/navbar/GlassNavbar';
import { lightTheme, darkTheme } from '../theme';
import { useDevStore } from './store';
import { Routes, Route } from 'react-router-dom';
import { articles } from './components/articles/ArticlesData';
import { lazy, Suspense } from 'react';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';

// Lazy load components to reduce initial bundle size
const Home = lazy(() => import('./components/home/Home'));
const Articles = lazy(() => import('./components/articles/Articles'));
const MDPage = lazy(() => import('./components/articles/MDPage'));

import './styles.css';

export default function App() {
	const { darkMode } = useDevStore();
	const theme = darkMode ? darkTheme : lightTheme;

	// Monitor performance in development
	if (process.env.NODE_ENV === 'development') {
		usePerformanceMonitor();
	}

	return (
		<MantineProvider theme={theme} forceColorScheme={darkMode ? 'dark' : 'light'}>
			<ModalsProvider>
				<Notifications />
				<GlassNavbar />

				<Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/articles' element={<Articles />} />
						{articles.map((article) => (
							<Route
								key={article.id}
								path={article.url}
								element={<MDPage fileName={article.mdFile} />}
							/>
						))}
					</Routes>
				</Suspense>
			</ModalsProvider>
		</MantineProvider>
	);
}
