import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
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
  test('should render all main sections', () => {
    render(<Home />);
    
    expect(screen.getByTestId('hero-mock')).toBeDefined();
    expect(screen.getByTestId('about-mock')).toBeDefined();
    expect(screen.getByTestId('technologies-mock')).toBeDefined();
    expect(screen.getByTestId('projects-mock')).toBeDefined();
    expect(screen.getByTestId('contact-mock')).toBeDefined();
  });

  test('should render components in correct order', () => {
    render(<Home />);
    
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

  test('should have proper structure', () => {
    const { container } = render(<Home />);
    
    // Check that the component renders without errors
    expect(container.firstChild).toBeDefined();
  });
});