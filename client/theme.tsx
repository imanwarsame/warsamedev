import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#F9F7F7',
		},
		secondary: {
			main: '#323232',
		},
		background: {
			default: '#F8F6F4',
			paper: '#F9F7F7'
		},
		text: {
			primary: '#323232'
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
					}
				}
			}
		}
	}
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#0B2447',
		},
		secondary: {
			main: '#A5D7E8',
		},
		background: {
			paper: '#1B262C'
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: 'linear-gradient(to right, #000428, #004e92)'
				},
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			}
		}
	}
});

export { darkTheme, lightTheme };