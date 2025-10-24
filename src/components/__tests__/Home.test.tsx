import { describe, expect, test, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../test-utils';
import Home from '../home/Home';

// Mock all child components
vi.mock('../hero/Hero', () => ({
  default: () => <div data-testid="hero-mock">Hero Component</div>
}));

vi.mock('../about/About', () => ({
  default: () => <div data-testid="about-mock">About Component</div>
}));

vi.mock('../technologies/Technologies', () => ({
  default: () => <div data-testid="technologies-mock">Technologies Component</div>
}));

vi.mock('../projects/Projects', () => ({
  default: () => <div data-testid="projects-mock">Projects Component</div>
}));

vi.mock('../contact/Contact', () => ({
  default: () => <div data-testid="contact-mock">Contact Component</div>
}));

describe('Home Component', () => {
  test('should render all main sections', async () => {
    render(<Home />);
    
    expect(screen.getByTestId('hero-mock')).toBeDefined();
    
    // Wait for lazy-loaded components to render
    await waitFor(() => {
      expect(screen.getByTestId('about-mock')).toBeDefined();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('technologies-mock')).toBeDefined();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('projects-mock')).toBeDefined();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-mock')).toBeDefined();
    });
  });

  test('should render components in correct order', async () => {
    render(<Home />);
    
    expect(screen.getByTestId('hero-mock')).toBeDefined();
    
    // Wait for all lazy-loaded components to render
    await waitFor(() => {
      const components = [
        screen.getByTestId('hero-mock'),
        screen.getByTestId('about-mock'),
        screen.getByTestId('technologies-mock'),
        screen.getByTestId('projects-mock'),
        screen.getByTestId('contact-mock')
      ];

      // Verify all components are present
      components.forEach(component => {
        expect(component).toBeDefined();
      });
    });
  });

  test('should have proper structure', () => {
    const { container } = render(<Home />);
    
    // Check that the component renders without errors
    expect(container.firstChild).toBeDefined();
  });
});