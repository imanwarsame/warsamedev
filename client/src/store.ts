import { create } from 'zustand';

interface CounterState {
	darkMode: boolean;
	setDarkMode: (mode: boolean) => void;
}

export const useDevStore = create<CounterState>((set) => {
	//Retrieve dark mode value from local storage
	const savedDarkMode = localStorage.getItem('IW_dark_mode');

	//Determine default value based on local storage or default to false
	const defaultDarkMode = savedDarkMode ? savedDarkMode === 'true' : false;

	return {
		darkMode: defaultDarkMode,
		setDarkMode: (mode: boolean) => {
			// Save dark mode to local storage
			localStorage.setItem('IW_dark_mode', mode.toString());
			// Update dark mode state
			set(() => ({ darkMode: mode }));
		},
	};
});
