import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface CounterState {
	darkMode: boolean;
	setDarkMode: (mode: boolean) => void;
}

// Utility function to safely access localStorage
const getStoredDarkMode = (): boolean => {
	try {
		const savedDarkMode = localStorage.getItem('IW_dark_mode');
		return savedDarkMode ? savedDarkMode === 'true' : false;
	} catch {
		// Fallback if localStorage is not available
		return false;
	}
};

// Utility function to safely save to localStorage
const saveToStorage = (key: string, value: string) => {
	try {
		localStorage.setItem(key, value);
	} catch {
		// Silently fail if localStorage is not available
		console.warn('Unable to save to localStorage');
	}
};

export const useDevStore = create<CounterState>()(
	subscribeWithSelector((set) => ({
		darkMode: getStoredDarkMode(),
		setDarkMode: (mode: boolean) => {
			saveToStorage('IW_dark_mode', mode.toString());
			set(() => ({ darkMode: mode }));
		},
	}))
);
