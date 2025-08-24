import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import Hero from '../hero/Hero';

// Mock the modules that might cause issues in tests

vi.mock('../decryptedText/DecryptedText', () => ({
  default: ({ text }: { text: string }) => <span data-testid="decrypted-text-mock">{text}</span>
}));

vi.mock('lottie-react', () => ({
  default: () => <div data-testid="lottie-mock">Lottie Animation</div>
}));

vi.mock('../liquidChrome/LiquidChrome', () => ({
  default: () => <div data-testid="liquid-chrome-mock">Liquid Chrome Background</div>
}));

describe('Hero Component', () => {
  test('should render main title', () => {
    render(<Hero />);
    
    expect(screen.getByText('Iman Warsame')).toBeDefined();
  });

  test('should render role descriptions', () => {
    render(<Hero />);
    
    // There are multiple DecryptedText components, so use getAllByTestId
    const decryptedElements = screen.getAllByTestId('decrypted-text-mock');
    expect(decryptedElements.length).toBeGreaterThan(0);
  });

  test('should render call-to-action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByText('Get In Touch')).toBeDefined();
    expect(screen.getByText('Download CV')).toBeDefined();
  });

  test('should render social links', () => {
    render(<Hero />);
    
    // Check for social links by their href attributes
    const socialLinks = screen.getAllByRole('link');
    
    // Should have at least 3 social links
    expect(socialLinks.length).toBeGreaterThanOrEqual(3);
    
    // Check that we have links with the right hrefs
    const hasGithub = socialLinks.some(link => 
      link.getAttribute('href') === 'https://github.com/imanwarsame'
    );
    const hasLinkedin = socialLinks.some(link => 
      link.getAttribute('href') === 'https://linkedin.com/in/imanwarsame'
    );
    const hasEmail = socialLinks.some(link => 
      link.getAttribute('href') === 'mailto:iwarsame38@gmail.com'
    );

    expect(hasGithub).toBeTruthy();
    expect(hasLinkedin).toBeTruthy();
    expect(hasEmail).toBeTruthy();
  });

  test('should render liquid chrome background', () => {
    render(<Hero />);
    
    expect(screen.getByTestId('liquid-chrome-mock')).toBeDefined();
  });

  test('should render scroll indicator', () => {
    render(<Hero />);
    
    expect(screen.getByTestId('lottie-mock')).toBeDefined();
  });
});