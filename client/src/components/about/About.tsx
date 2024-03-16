import { Box, Paper, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';

export default function About() {
	return (
		<Element name='about_element'>
			<Box
				component='div'
				sx={{
					height: '100svh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: '50px',
				}}
			>
				<Paper sx={{ width: '60vw', minHeight: '300px', padding: 3 }}>
					<Stack direction='column'>
						<Typography variant='h4' marginBottom={3}>
							About
						</Typography>
						<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>
							Hi! My name is Iman, I&apos;m a senior software and civil engineer at Ramboll.
						</Typography>
						<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>
							I have proven expertise in managing and implementing software solutions both in web
							and desktop development.
						</Typography>
						<Typography sx={{ typography: { sm: 'body1', xs: 'caption' } }}>
							I am also national lead for digital transformation for the Association for
							Consultancy and Engineering Emerging Professionals and founder of Warsame Studio.
						</Typography>
					</Stack>
				</Paper>
			</Box>
		</Element>
	);
}
