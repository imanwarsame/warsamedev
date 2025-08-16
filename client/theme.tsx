import { createTheme } from '@mantine/core';
import '@fontsource/poppins';

const lightTheme = createTheme({
	primaryColor: 'green',
	fontFamily: 'Poppins, sans-serif',
	colors: {
		green: [
			'#F1FBF0',
			'#DBE5E1',
			'#C5EFC2',
			'#8FF18D',
			'#39D735',
			'#2AC828',
			'#1EA01C',
			'#157A13',
			'#0C540A',
			'#072E06'
		],
	},
	primaryShade: 4,
	defaultRadius: 10,
	shadows: {
		sm: '0 1px 3px rgba(0, 0, 0, 0.05)',
		md: '0 4px 6px rgba(0, 0, 0, 0.07)',
		lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
		xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
	},
	other: {
		background: {
			default: '#F1FBF0',
			paper: '#DBE5E1',
		},
		text: {
			primary: '#091508',
		},
	},
});

const darkTheme = createTheme({
	primaryColor: 'green',
	fontFamily: 'Poppins, sans-serif',
	colors: {
		green: [
			'#051004',
			'#071F19',
			'#0C2F20',
			'#0F3F27',
			'#2AC828',
			'#39D735',
			'#4FE24D',
			'#6FE86D',
			'#8FF18D',
			'#E9F7E9'
		],
	},
	primaryShade: 4,
	defaultRadius: 10,
	shadows: {
		sm: '0 1px 3px rgba(0, 0, 0, 0.2)',
		md: '0 4px 6px rgba(0, 0, 0, 0.25)',
		lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
		xl: '0 20px 25px rgba(0, 0, 0, 0.35)',
	},
	other: {
		background: {
			default: '#051004',
			paper: '#071F19',
		},
		text: {
			primary: '#E9F7E9',
		},
	},
});

export { lightTheme, darkTheme };
