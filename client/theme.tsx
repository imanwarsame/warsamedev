import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#F9F7F7',
		},
		secondary: {
			main: '#001C30',
		},
		background: {
			default: '#F8F6F4',
			paper: '#F9F7F7'
		},
		text: {
			primary: '#001C30'
		}
	},
	typography: {
		fontFamily: [
			'Poppins',
			'sans-serif'
		].join(','),
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			}
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						color: '#FF6666'
					},
					color: '#001C30'
				}
			}
		}
	}
});


export { theme };