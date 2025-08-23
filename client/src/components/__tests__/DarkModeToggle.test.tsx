import { describe, expect, test, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import DarkModeToggle from '../darkmode/DarkModeToggle';

// Mock the store
const mockToggleDarkMode = vi.fn();
vi.mock('../../store', () => ({
  useDevStore: () => ({
    darkMode: false,
    toggleDarkMode: mockToggleDarkMode,
  }),
}));

// Mock theme-toggles
vi.mock('@theme-toggles/react', () => ({
  Classic: ({ toggled, onToggle, ...props }: any) => (
    <button 
      data-testid="theme-toggle"
      onClick={onToggle}
      aria-pressed={toggled}
      {...props}
    >
      {toggled ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}));

describe('DarkModeToggle Component', () => {
  beforeEach(() => {
    mockToggleDarkMode.mockClear();
  });

  test('should render toggle button', () => {
    render(<DarkModeToggle />);
    
    expect(screen.getByTestId('theme-toggle')).toBeDefined();
  });

  test('should call toggleDarkMode when clicked', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByTestId('theme-toggle');
    fireEvent.click(toggleButton);
    
    expect(mockToggleDarkMode).toHaveBeenCalledOnce();
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