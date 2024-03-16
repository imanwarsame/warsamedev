import { Box, ThemeProvider, CssBaseline, Typography } from '@mui/material';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Blob from './components/blob/Blob';
import { lightTheme, darkTheme } from '../theme';
import { useDevStore } from './store';
import DarkModeToggle from './components/darkmode/DarkModeToggle';

export default function App() {
	const { darkMode } = useDevStore();
	const theme = darkMode ? darkTheme : lightTheme;
	const currentYear = new Date().getFullYear();
	const copyrightText = '© ' + currentYear;

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
			<Box component='div' sx={{ display: 'flex' }}>
				<Sidebar />
				<Box
					component='main'
					sx={{ flexGrow: 1, bgcolor: 'background.default', marginLeft: '100px' }}
				>
					<DarkModeToggle />
					<Blob />
					<About />
					<Experience />
					{/* <Portfolio /> */}
					<Contact />
				</Box>
				<Typography
					sx={{
						position: 'fixed',
						bottom: 0,
						left: '50%',
						typography: { xs: 'caption' },
						textAlign: 'center',
						padding: '5px',
						border: 1,
					}}
					color='textSecondary'
				>
					{copyrightText}
				</Typography>
			</Box>
		</ThemeProvider>
	);
}
