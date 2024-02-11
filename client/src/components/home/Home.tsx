import {
	Avatar,
	Box,
	Button,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import Lottie from 'lottie-react';
import avatar from './Profile.jpg';
import BackgroundPattern from './Background.png';
import TwitterIcon from './twitter.svg';
import LinkedInIcon from './linkedin-in.svg';
import GithubIcon from './github.svg';
import animatedScrollIcon from './scroll-down.json';
import { Element, scroller } from 'react-scroll';

export default function Home() {
	function handleScroll() {
		scroller.scrollTo('contact_element', {
			duration: 3000, // Duration of the scroll animation in milliseconds
			delay: 0, // Delay before scrolling begins in milliseconds
			smooth: 'easeInOutQuart', // Scrolling animation easing function
		});
	}

	return (
		<Element name="home_element">
			<Box
				component="div"
				sx={{
					backgroundImage: `url(${BackgroundPattern})`,
					height: '100vh',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Stack direction="column" alignItems="center" spacing={3}>
					<Avatar src={avatar} sx={{ width: 200, height: 200 }} />
					<Typography
						display={{ sm: 'block', xs: 'none' }}
						sx={{ backgroundColor: 'white' }}
					>
						Full Stack Developer | Civil Engineer | Architectural Photographer
					</Typography>
					<Stack direction="row" spacing={3}>
						<IconButton
							size="medium"
							href="https://github.com/imanwarsame"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={GithubIcon}
								alt="Silhoutte of an octopus cat hybrid"
								height={30}
							/>
						</IconButton>
						<IconButton
							size="medium"
							href="https://twitter.com/imnwrsm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={TwitterIcon}
								alt="Twitter logo of tweeting bird"
								height={30}
							/>
						</IconButton>
						<IconButton
							size="medium"
							href="https://www.linkedin.com/in/imanwarsame/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={LinkedInIcon}
								alt="The letters i and n representing the LinkedIn logo"
								height={30}
							/>
						</IconButton>
					</Stack>
					<Button
						variant="contained"
						onClick={handleScroll}
						color="secondary"
						sx={{ color: 'white', borderRadius: 20, boxShadow: 'none' }}
					>
						Contact me
					</Button>
					<Box
						component="div"
						display="flex"
						alignItems="center"
						justifyContent="center"
						sx={{ position: 'absolute', bottom: '20px' }}
					>
						<Lottie animationData={animatedScrollIcon} height={50} width={50} />
					</Box>
				</Stack>
			</Box>
		</Element>
	);
}
