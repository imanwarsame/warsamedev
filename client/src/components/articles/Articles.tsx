import { Box } from '@mui/material';

export default function Articles() {
	return (
		<Box
			component='div'
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<p>404 page not found</p>
		</Box>
	);
}
