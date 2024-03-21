import { Box, Hidden, IconButton, Stack, Typography } from '@mui/material';
import AnimatedText from '../title/AnimatedText';
import Lottie from 'lottie-react';
import animatedScrollDark from '../../assets/scroll-down-dark.json';
import animatedScrollLight from '../../assets/scroll-down-light.json';
import { useDevStore } from '../../store';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Landing() {
	const { darkMode } = useDevStore();
	const strings = ['Full-stack developer', 'Chartered civil engineer', 'Photographer'];

	return (
		<>
			<Box
				component='div'
				sx={{
					position: 'absolute',
					top: '50%',
					left: { xs: '10%', md: '2%' },
					zIndex: 2,
				}}
			>
				<Stack direction='column' spacing={1}>
					<Typography fontWeight='bold' sx={{ typography: { xs: 'h2', md: 'h2' } }}>
						Iman Warsame
					</Typography>
					<AnimatedText items={strings} />
					<Hidden mdDown>
						<Stack direction='row' spacing={2}>
							<IconButton
								size='large'
								href='https://github.com/imanwarsame'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Silhoutte of an octopus cat hybrid'
								sx={{ minWidth: 0, height: 40, width: 40 }}
								disableRipple
							>
								<GitHubIcon color='primary' sx={{ fontSize: '40px' }} />
							</IconButton>
							<IconButton
								size='medium'
								href='https://www.linkedin.com/in/imanwarsame/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='The letters i and n representing the LinkedIn logo'
								sx={{ minWidth: 0, height: 40, width: 40 }}
								disableRipple
							>
								<LinkedInIcon color='primary' sx={{ fontSize: '45px' }} />
							</IconButton>
						</Stack>
					</Hidden>
				</Stack>
			</Box>
			<Box
				component='div'
				display='flex'
				alignItems='center'
				justifyContent='center'
				sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
			>
				<Lottie
					animationData={darkMode ? animatedScrollLight : animatedScrollDark}
					height={200}
					width={200}
					style={{ color: 'orange' }}
				/>
			</Box>
		</>
	);
}
