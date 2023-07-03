import { Box, Typography } from '@mui/material';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';

export default function App() {

	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar/>
			<Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
				<Typography>Hello</Typography>
				<Contact/>
				<About/>
			</Box>
		</Box>
	);
}