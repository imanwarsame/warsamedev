import { Box, Paper, Typography } from '@mui/material';

export default function Work() {

	return(
		<Box sx={{
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<Paper sx={{ width: '60vw', minHeight: '300px', padding: 3, backgroundColor: 'blueviolet' }}>
				<Typography>Hello</Typography>
			</Paper>
		</Box>
	);
}