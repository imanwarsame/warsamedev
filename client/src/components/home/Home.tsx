import { Box, Typography } from '@mui/material';
import BackgroundPattern from './pattern.svg';

export default function Home() {

	return(
		<Box sx={{
			width: '100%',
			height: '100vh',
			backgroundImage: `url(${BackgroundPattern})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
		}}>
			<Typography>Hello</Typography>
		</Box>
	);
}