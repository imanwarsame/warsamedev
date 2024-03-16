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
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
						backgroundColor: '#F1FBF0',
						width: '20px',
					},
					'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
						borderRadius: '20px',
						backgroundColor: '#D6DEE1',
						border: '4px solid transparent',
						backgroundClip: 'content-box',
					},
					'&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
						backgroundColor: '#8FF18D', // Adjusted to primary color
					},
					'&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
						backgroundColor: '#8FF18D', // Adjusted to secondary color
					},
					'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#8FF18D', // Adjusted to primary color
					},
					'&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
						backgroundColor: '#F1FBF0', // Adjusted to paper background color
					},
				},
				body: {
					WebkitTapHighlightColor: 'transparent', //Removes blue highlight on button click for mobile
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
			main: '#071F19',
		},
		background: {
			default: '#051004',
			paper: '#071F19',
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
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
						backgroundColor: '#051004',
						width: '20px',
					},
					'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
						borderRadius: '20px',
						backgroundColor: '#D6DEE1',
						border: '4px solid transparent',
						backgroundClip: 'content-box',
					},
					'&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
						backgroundColor: '#2AC828', // Adjusted to primary color
					},
					'&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
						backgroundColor: '#2AC828', // Adjusted to secondary color
					},
					'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#2AC828', // Adjusted to primary color
					},
					'&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
						backgroundColor: '#051004', // Adjusted to paper background color
					},
				},
				body: {
					WebkitTapHighlightColor: 'transparent', //Removes blue highlight on button click for mobile
				},
			},
		},
	},
});

export { lightTheme, darkTheme };
