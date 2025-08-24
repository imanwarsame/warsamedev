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

describe('DarkModeToggle Component', () => {
  beforeEach(() => {
    mockSetDarkMode.mockClear();
  });

  test('should render toggle button', () => {
    render(<DarkModeToggle />);
    
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeDefined();
  });

  test('should call setDarkMode when clicked', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByRole('button', { name: 'Toggle dark mode' });
    fireEvent.click(toggleButton);
    
    expect(mockSetDarkMode).toHaveBeenCalledWith(true);
  });

  test('should have correct CSS class based on theme state', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByRole('button', { name: 'Toggle dark mode' });
    expect(toggleButton).toHaveClass('theme-toggle');
    expect(toggleButton).not.toHaveClass('theme-toggle--dark');
  });

  test('should render with proper accessibility attributes', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByRole('button', { name: 'Toggle dark mode' });
    expect(toggleButton.getAttribute('aria-label')).toBe('Toggle dark mode');
  });

  test('should contain sun and moon elements', () => {
    render(<DarkModeToggle />);
    
    const toggleButton = screen.getByRole('button', { name: 'Toggle dark mode' });
    expect(toggleButton.querySelector('.sun')).toBeDefined();
    expect(toggleButton.querySelector('.moon')).toBeDefined();
  });
});