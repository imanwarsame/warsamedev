import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#001C30',
		},
		secondary: {
			main: '#FF6666',
		},
		background: {
			default: '#F1F6F9',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#001C30',
		},
	},
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						color: '#FF6666',
					},
					color: '#001C30',
				},
			},
		},
	},
});

export { theme };
