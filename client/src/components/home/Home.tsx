import { Box } from '@mui/material';
import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Blob from '../blob/Blob';

export default function Home() {
	return (
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
	);
}
