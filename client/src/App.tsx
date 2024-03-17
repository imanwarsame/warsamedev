import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Blob from './components/blob/Blob';
import { lightTheme, darkTheme } from '../theme';
import { useDevStore } from './store';
import Portfolio from './components/portfolio/Portfolio';

export default function App() {
	const { darkMode } = useDevStore();
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

	return (
		<ThemeProvider theme={theme}>
			{/* Globally resets CSS to create a baseline to build on. enableColorScheme allows 
				switching between "light" and "dark" modes of native components such as scrollbar */}
			<CssBaseline enableColorScheme />
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
