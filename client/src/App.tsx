import { Box } from '@mui/material';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/experience/Work';
import Education from './components/experience/Education';
import Blob from './components/blob/Blob';

export default function App() {
	return (
		<Box component="div" sx={{ display: 'flex' }}>
			<Sidebar />
			<Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
				<Blob />
				<Home />
				<About />
				<Work />
				<Education />
				<Portfolio />
				<Contact />
			</Box>
		</Box>
	);
}
