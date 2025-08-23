import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import Technologies from '../technologies/Technologies';

// Mock LogoLoop component
vi.mock('../logoLoop/LogoLoop', () => ({
  LogoLoop: () => <div data-testid="logo-loop-mock">Logo Loop</div>,
  default: () => <div data-testid="logo-loop-mock">Logo Loop</div>
}));

describe('Technologies Component', () => {
  test('should render section title', () => {
    render(<Technologies />);
    
    expect(screen.getByText('Technologies')).toBeDefined();
  });

  test('should render section badge', () => {
    render(<Technologies />);
    
    const badge = screen.getByText('Technologies');
    expect(badge.closest('.mantine-Badge-root')).toBeDefined();
  });

  test('should render main heading', () => {
    render(<Technologies />);
    
    expect(screen.getByText('Tech Stack & Tools')).toBeDefined();
  });

  test('should render description text', () => {
    render(<Technologies />);
    
    expect(screen.getByText(/Technologies and frameworks I use to build modern/i)).toBeDefined();
  });

  test('should render logo loop component', () => {
    render(<Technologies />);
    
    expect(screen.getByTestId('logo-loop-mock')).toBeDefined();
  });

  test('should render with proper container structure', () => {
    render(<Technologies />);
    
    // Check that the component renders within a container
    const container = screen.getByText('Tech Stack & Tools').closest('.mantine-Container-root');
    expect(container).toBeDefined();
  });
});