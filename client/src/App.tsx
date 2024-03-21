import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import { lightTheme, darkTheme } from '../theme';
import { useDevStore } from './store';
import { useEffect, useState } from 'react';
import Splash from './components/splash/Splash';
import { AnimatePresence } from 'framer-motion';
import Home from './components/home/Home';

export default function App() {
	const { darkMode } = useDevStore();
	const theme = darkMode ? darkTheme : lightTheme;
	const [loading, setLoading] = useState(true);

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
		(async () => {
			setTimeout(() => {
				setLoading(false);

				document.body.style.cursor = 'default';

				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			{/* Globally resets CSS to create a baseline to build on. enableColorScheme allows 
				switching between "light" and "dark" modes of native components such as scrollbar */}
			<CssBaseline enableColorScheme />
			<AnimatePresence mode='wait'>{loading && <Splash />}</AnimatePresence>
			<Box
				component='div'
				sx={{ display: 'flex', WebkitOverflowScrolling: 'touch', transform: 'translateZ(0)' }}
			>
				<Navbar />
				<Home />
			</Box>
		</ThemeProvider>
	);
}
