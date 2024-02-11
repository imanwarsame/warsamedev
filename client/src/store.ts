import { create } from 'zustand';

interface CounterState {
	darkMode: boolean;
	setDarkMode: (mode: boolean) => void;
}

export const useDevStore = create<CounterState>((set) => ({
	darkMode: localStorage.getItem('darkMode') === 'true' || false, // Set default value to the value in local storage or false if not found
	setDarkMode: (mode: boolean) => {
		set(() => ({ darkMode: mode }));
		localStorage.setItem('IW_dark_mode', mode.toString()); // Save dark mode to local storage
	},
}));
