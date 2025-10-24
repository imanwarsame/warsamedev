import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import DecryptedText from '../decryptedText/DecryptedText';

// Mock the animation hooks
vi.mock('@mantine/hooks', () => ({
  useMediaQuery: () => false,
}));

describe('DecryptedText Component', () => {
  test('should render text content', () => {
    render(<DecryptedText text="Hello World" />);
    
    // The component should render the text (may be animated)
    const textElement = screen.getByText(/Hello World/i);
    expect(textElement).toBeDefined();
  });

  test('should handle empty text', () => {
    const { container } = render(<DecryptedText text="" />);
    
    expect(container.firstChild).toBeDefined();
  });

  test('should render with different animation speeds', () => {
    render(<DecryptedText text="Fast animation" speed={10} />);
    
    const textElement = screen.getByText(/Fast animation/i);
    expect(textElement).toBeDefined();
  });

  test('should render with maxIterations prop', () => {
    render(<DecryptedText text="Limited iterations" maxIterations={5} />);
    
    const textElement = screen.getByText(/Limited iterations/i);
    expect(textElement).toBeDefined();
  });

  test('should render with sequential animation', () => {
    render(<DecryptedText text="Sequential text" sequential={true} />);
    
    const textElement = screen.getByText(/Sequential text/i);
    expect(textElement).toBeDefined();
  });

  test('should handle long text content', () => {
    const longText = "This is a very long text that should be handled properly by the DecryptedText component";
    render(<DecryptedText text={longText} />);
    
    const textElement = screen.getByText(new RegExp(longText, 'i'));
    expect(textElement).toBeDefined();
  });
});