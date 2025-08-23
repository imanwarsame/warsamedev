import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import Hero from '../hero/Hero';

// Mock the modules that might cause issues in tests
vi.mock('../threads/Threads', () => ({
  default: () => <div data-testid="threads-mock">Threads Component</div>
}));

vi.mock('../decryptedText/DecryptedText', () => ({
  default: ({ text }: { text: string }) => <div data-testid="decrypted-text-mock">{text}</div>
}));

vi.mock('lottie-react', () => ({
  default: () => <div data-testid="lottie-mock">Lottie Animation</div>
}));

describe('Hero Component', () => {
  test('should render main title', () => {
    render(<Hero />);
    
    expect(screen.getByText('Iman Warsame')).toBeDefined();
  });

  test('should render role descriptions', () => {
    render(<Hero />);
    
    expect(screen.getByTestId('decrypted-text-mock')).toBeDefined();
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
    const githubLink = socialLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/imanwarsame'
    );
    const linkedinLink = socialLinks.find(link => 
      link.getAttribute('href') === 'https://linkedin.com/in/imanwarsame'
    );
    const emailLink = socialLinks.find(link => 
      link.getAttribute('href') === 'mailto:hello@warsame.dev'
    );

    expect(githubLink).toBeDefined();
    expect(linkedinLink).toBeDefined();
    expect(emailLink).toBeDefined();
  });

  test('should render threads background', () => {
    render(<Hero />);
    
    expect(screen.getByTestId('threads-mock')).toBeDefined();
  });

  test('should render scroll indicator', () => {
    render(<Hero />);
    
    expect(screen.getByTestId('lottie-mock')).toBeDefined();
  });
});