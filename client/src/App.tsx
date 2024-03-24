import { ThemeProvider, CssBaseline, Hidden } from '@mui/material';
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

export default function App() {
	const { darkMode } = useDevStore();
	const location = useLocation();
	const [loading, setLoading] = useState(location.pathname === '/' ? true : false);
	const theme = darkMode ? darkTheme : lightTheme;

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
		<ThemeProvider theme={theme}>
			{/* Globally resets CSS to create a baseline to build on. enableColorScheme allows 
				switching between "light" and "dark" modes of native components such as scrollbar */}
			<CssBaseline enableColorScheme />
			<AnimatePresence mode='wait'>
				{location.pathname === '/' && loading && <Splash />}
			</AnimatePresence>
			<MobileNavbar />
			{/* <Hidden mdUp>
				<MobileNavbar />
			</Hidden> */}
			<Hidden mdDown>
				<Navbar />
			</Hidden>
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
		</ThemeProvider>
	);
}
