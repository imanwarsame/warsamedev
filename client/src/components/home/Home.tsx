import { Box } from '@mui/material';
import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Blob from '../blob/Blob';
import Gallery from '../portfolio/Gallery';

export default function Home() {
	return (
		<Box
			component='main'
			sx={{
				flexGrow: 1,
				transform: 'translateZ(0)', //Enables hardware acceleration
				bgcolor: 'background.default',
				WebkitOverflowScrolling: 'touch',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				overflow: 'hidden',
			}}
		>
			<Blob />
			<About />
			<Gallery />
			<Experience />
			<Contact />
		</Box>
	);
}
