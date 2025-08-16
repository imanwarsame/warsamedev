import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import Navbar from './components/navbar/Navbar';
import { lightTheme, darkTheme } from '../theme';
import { useDevStore } from './store';
import { useEffect, useState } from 'react';
import Splash from './components/splash/Splash';
import { AnimatePresence } from 'framer-motion';
import Home from './components/home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Articles from './components/articles/Articles';
import { articles } from './components/articles/ArticlesData';
import MDPage from './components/articles/MDPage';
import MobileNavbar from './components/mobilenavbar/MobileNavbar';
import { useMediaQuery } from '@mantine/hooks';
import './styles.css';

export default function App() {
	const { darkMode } = useDevStore();
	const location = useLocation();
	const [loading, setLoading] = useState(location.pathname === '/' ? true : false);
	const theme = darkMode ? darkTheme : lightTheme;
	const isMobile = useMediaQuery('(max-width: 768px)');

	console.log(`
	#####  #####         ###         #####    
	#####   ####         ###        #####     
	 #####  #####       #####      #####      
	 ###### #####      ######     #####       
	  #####  #####    #######    #####        
	   ##### #####   #### ####   ####         
	   #####  ##### ####  ##### #####         
		####  #########    #########          
		#####  #######      #######           
		#####  ######       ######            
		 #####  ####         ####             
		 ####   ####         ###              
		  ##     ##          ##               
	`);

	useEffect(() => {
		if (location.pathname === '/') {
			(async () => {
				setTimeout(() => {
					setLoading(false);
					document.body.style.cursor = 'default';
					window.scrollTo(0, 0);
				}, 2000);
			})();
		} else {
			setLoading(false);
			document.body.style.cursor = 'default';
		}
	}, [location.pathname]);

	return (
		<MantineProvider theme={theme} forceColorScheme={darkMode ? 'dark' : 'light'}>
			<ModalsProvider>
				<Notifications />
				<AnimatePresence mode='wait'>
					{location.pathname === '/' && loading && <Splash />}
				</AnimatePresence>
				
				{isMobile ? <MobileNavbar /> : <Navbar />}
				
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
			</ModalsProvider>
		</MantineProvider>
	);
}
