import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#39D735',
		},
		secondary: {
			main: '#8FF18D',
		},
		background: {
			default: '#F1FBF0',
			paper: '#DBE5E1',
		},
		text: {
			primary: '#091508',
		},
	},
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
	components: {
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					borderRadius: 10,
					elevation: 0,
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					// '&:hover': {
					// 	color: '#FF6666',
					// },
					// color: '#001C30',
				},
			},
		},
	},
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#2AC828',
		},
		secondary: {
			main: '#10710E',
		},
		background: {
			default: '#051004',
			paper: '#111B10',
		},
		text: {
			primary: '#E9F7E9',
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
					// '&:hover': {
					// 	color: '#10710E',
					// 	borderColor: '#10710E',
					// },
				},
			},
		},
	},
});

export { lightTheme, darkTheme };
