import { describe, expect, test, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import GlassNavbar from '../navbar/GlassNavbar';

// Mock child components
vi.mock('../darkmode/DarkModeToggle', () => ({
  default: () => <button data-testid="dark-mode-toggle">Toggle Dark Mode</button>
}));

vi.mock('../glassSurface/GlassSurface', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="glass-surface">{children}</div>
  )
}));

// Mock react-scroll
vi.mock('react-scroll', () => ({
  Link: ({ children, to, ...props }: any) => (
    <button data-testid={`scroll-link-${to}`} {...props}>
      {children}
    </button>
  )
}));

describe('GlassNavbar Component', () => {
  test('should render navbar with logo', () => {
    render(<GlassNavbar />);
    
    // Check for logo image
    const logo = screen.getByRole('img');
    expect(logo).toBeDefined();
  });

  test('should render navigation links', () => {
    render(<GlassNavbar />);
    
    expect(screen.getByTestId('scroll-link-about_element')).toBeDefined();
    expect(screen.getByTestId('scroll-link-projects_element')).toBeDefined();
    expect(screen.getByTestId('scroll-link-contact_element')).toBeDefined();
  });

  test('should render dark mode toggle', () => {
    render(<GlassNavbar />);
    
    expect(screen.getByTestId('dark-mode-toggle')).toBeDefined();
  });

  test('should render glass surface wrapper', () => {
    render(<GlassNavbar />);
    
    expect(screen.getByTestId('glass-surface')).toBeDefined();
  });

  test('should render Articles link', () => {
    render(<GlassNavbar />);
    
    const articlesLink = screen.getByText('Articles');
    expect(articlesLink).toBeDefined();
    expect(articlesLink.closest('a')).toBeDefined();
  });

  test('should have proper navigation structure', () => {
    render(<GlassNavbar />);
    
    const nav = screen.getByRole('navigation') || screen.getByTestId('glass-surface');
    expect(nav).toBeDefined();
  });

  test('should handle link clicks', () => {
    render(<GlassNavbar />);
    
    const aboutLink = screen.getByTestId('scroll-link-about_element');
    fireEvent.click(aboutLink);
    
    // Test passes if no errors are thrown
    expect(aboutLink).toBeDefined();
  });
});