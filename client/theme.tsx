import { createTheme } from '@mantine/core';
import '@fontsource/poppins';
import '@fontsource/inter';

const lightTheme = createTheme({
	primaryColor: 'blue',
	fontFamily: 'Inter, sans-serif',
	headings: {
		fontFamily: 'Poppins, sans-serif',
		fontWeight: '600',
	},
	colors: {
		blue: [
			'#f0f4ff',
			'#d9e2ff',
			'#adc2ff',
			'#7c9eff',
			'#5373fd',
			'#3b58fc',
			'#2c47fd',
			'#1d39e2',
			'#1530ca',
			'#0026b3'
		],
		gray: [
			'#fafafa',
			'#f4f4f5',
			'#e4e4e7',
			'#d4d4d8',
			'#a1a1aa',
			'#71717a',
			'#52525b',
			'#3f3f46',
			'#27272a',
			'#18181b'
		],
		purple: [
			'#faf5ff',
			'#f3e8ff',
			'#e9d5ff',
			'#d8b4fe',
			'#c084fc',
			'#a855f7',
			'#9333ea',
			'#7c3aed',
			'#6d28d9',
			'#5b21b6'
		]
	},
	primaryShade: 6,
	defaultRadius: 'md',
	shadows: {
		xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
		sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
	},
	spacing: {
		xs: '0.5rem',
		sm: '0.75rem', 
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem',
	},
	breakpoints: {
		xs: '30em',
		sm: '48em',
		md: '64em',
		lg: '74em',
		xl: '90em',
	},
	other: {
		background: {
			default: '#ffffff',
			paper: '#fafafa',
			subtle: '#f4f4f5',
		},
		text: {
			primary: '#18181b',
			secondary: '#71717a',
			subtle: '#a1a1aa',
		},
		border: {
			light: '#e4e4e7',
			default: '#d4d4d8',
		},
		gradient: {
			primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
			hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		}
	},
});

const darkTheme = createTheme({
	primaryColor: 'blue',
	fontFamily: 'Inter, sans-serif',
	headings: {
		fontFamily: 'Poppins, sans-serif',
		fontWeight: '600',
	},
	colors: {
		blue: [
			'#0c1629',
			'#111827',
			'#1e293b',
			'#334155',
			'#3b82f6',
			'#60a5fa',
			'#93c5fd',
			'#bfdbfe',
			'#dbeafe',
			'#eff6ff'
		],
		gray: [
			'#18181b',
			'#27272a',
			'#3f3f46',
			'#52525b',
			'#71717a',
			'#a1a1aa',
			'#d4d4d8',
			'#e4e4e7',
			'#f4f4f5',
			'#fafafa'
		],
		purple: [
			'#1e1b4b',
			'#312e81',
			'#3730a3',
			'#4338ca',
			'#5b21b6',
			'#7c3aed',
			'#8b5cf6',
			'#a78bfa',
			'#c4b5fd',
			'#ddd6fe'
		]
	},
	primaryShade: 5,
	defaultRadius: 'md',
	shadows: {
		xs: '0 1px 2px rgba(0, 0, 0, 0.3)',
		sm: '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)',
		md: '0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
		lg: '0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3)',
		xl: '0 20px 25px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.2)',
	},
	spacing: {
		xs: '0.5rem',
		sm: '0.75rem',
		md: '1rem', 
		lg: '1.5rem',
		xl: '2rem',
	},
	breakpoints: {
		xs: '30em',
		sm: '48em',
		md: '64em',
		lg: '74em',
		xl: '90em',
	},
	other: {
		background: {
			default: '#0f0f0f',
			paper: '#18181b',
			subtle: '#27272a',
		},
		text: {
			primary: '#fafafa',
			secondary: '#a1a1aa',
			subtle: '#71717a',
		},
		border: {
			light: '#3f3f46',
			default: '#52525b',
		},
		gradient: {
			primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
			hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		}
	},
});

export { lightTheme, darkTheme };
