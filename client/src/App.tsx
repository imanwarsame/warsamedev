import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Blob from './components/blob/Blob';
import { lightTheme, darkTheme } from '../theme';
import { useDevStore } from './store';
import Portfolio from './components/portfolio/Portfolio';
import { useEffect, useState } from 'react';
import Splash from './components/splash/Splash';
import { AnimatePresence } from 'framer-motion';

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
			const LocomotiveScroll = (await import('locomotive-scroll')).default;

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const locomotiveScroll = new LocomotiveScroll();

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
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						transform: 'translateZ(0)', //Enables hardware acceleration
						bgcolor: 'background.default',
						WebkitOverflowScrolling: 'touch',
					}}
				>
					<Blob />
					<About />
					<Portfolio />
					<Experience />
					<Contact />
				</Box>
			</Box>
		</ThemeProvider>
	);
}
