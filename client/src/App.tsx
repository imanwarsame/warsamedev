import { Box } from '@mui/material';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';

export default function App() {

	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar/>
			<Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
				<Home/>
				<About/>
				<Contact/>
			</Box>
		</Box>
	);
}