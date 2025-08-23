import { describe, expect, test, vi, beforeEach } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import DarkModeToggle from '../darkmode/DarkModeToggle';

// Mock the store
const mockSetDarkMode = vi.fn();
vi.mock('../../store', () => ({
  useDevStore: () => ({
    darkMode: false,
    setDarkMode: mockSetDarkMode,
  }),
}));

// Theme-toggles is mocked globally in test-setup.tsx

describe('DarkModeToggle Component', () => {
  beforeEach(() => {
    mockSetDarkMode.mockClear();
  });

  test('should render toggle button', () => {
    render(<DarkModeToggle />);
    
    expect(screen.getByTestId('theme-toggle')).toBeDefined();
  });

  test('should call setDarkMode when clicked', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(toggleButton);
    
    expect(mockSetDarkMode).toHaveBeenCalledOnce();
  });

  test('should display current theme state', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByTestId('theme-toggle');
    expect(toggleButton.getAttribute('aria-pressed')).toBe('false');
  });

  test('should render with proper accessibility attributes', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByTestId('theme-toggle');
    expect(toggleButton.getAttribute('aria-pressed')).toBeDefined();
  });
});