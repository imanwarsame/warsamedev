import { Avatar, Box, Button, IconButton, Stack } from '@mui/material';
import Lottie from 'lottie-react';
import avatar from './Profile.jpg';
import BackgroundPattern from './Background.png';
import TwitterIcon from './twitter.svg';
import LinkedInIcon from './linkedin-in.svg';
import animatedScrollIcon from './scroll-down.json';

export default function Home() {

	return(
		<Box sx={{
			backgroundImage: `url(${BackgroundPattern})`,
			height: '100vh',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			backgroundSize: 'cover',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<Stack direction='column' alignItems='center' spacing={3}>
				<Avatar src={avatar} sx={{ width: 200, height: 200 }}/>
				<Stack direction='row' spacing={3}>
					<IconButton size='medium' href='https://twitter.com/imnwrsm' target="_blank" rel="noopener noreferrer">
						<img src={TwitterIcon} alt='Twitter logo of tweeting bird' height={30}/>
					</IconButton>
					<IconButton size='medium' href='https://www.linkedin.com/in/imanwarsame/' target="_blank" rel="noopener noreferrer">
						<img src={LinkedInIcon} alt='The letters i and n representing the LinkedIn logo' height={30}/>
					</IconButton>
				</Stack>
				<Button variant="contained" color='secondary' sx={{ color: 'white', borderRadius: 20, boxShadow: 'none' }}>Contact me</Button>
				<Box display='flex' alignItems='center' justifyContent='center' sx={{ position: 'absolute', bottom: '20px' }}>
					<Lottie animationData={animatedScrollIcon} height={50} width={50} />
				</Box>
			</Stack>
		</Box>
	);
}

