import { Avatar, Box, Typography } from '@mui/material';
import avatar from './Profile.jpg';
import BackgroundPattern from './Background.png';

export default function Home() {

	return(
		<Box sx={{
			backgroundImage: `url(${BackgroundPattern})`,
			height: '100vh',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			backgroundSize: 'cover'
		}}>
			<Avatar src={avatar} sx={{ width: 200, height: 200 }}/>
			<Typography>Hello</Typography>
		</Box>
	);
}

