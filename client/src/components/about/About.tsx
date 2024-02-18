import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';

export default function About() {
	// Function to download CV PDF
	const downloadCV = () => {
		// using Java Script method to get PDF file
		fetch('CV.pdf').then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				const alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'CV.pdf';
				alink.click();
			});
		});
	};

	return (
		<Element name='about_element'>
			<Box
				component='div'
				sx={{
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
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
						<Button
							variant='contained'
							color='secondary'
							onClick={downloadCV}
							sx={{ color: 'white', borderRadius: 20, boxShadow: 'none', marginTop: 3 }}
							aria-label='download-cv-button'
						>
							Download CV
						</Button>
					</Stack>
				</Paper>
			</Box>
		</Element>
	);
}
