import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import AnimatedText from '../title/AnimatedText';

// Mock react-type-animation
vi.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence, ...props }: any) => (
    <div data-testid="type-animation" {...props}>
      {Array.isArray(sequence) ? sequence[0] : sequence}
    </div>
  )
}));

describe('AnimatedText Component', () => {
  test('should render with simple text', () => {
    render(<AnimatedText text="Hello World" />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
    expect(screen.getByText('Hello World')).toBeDefined();
  });

  test('should render with array of texts', () => {
    const texts = ['Text 1', 'Text 2', 'Text 3'];
    render(<AnimatedText text={texts} />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
    expect(screen.getByText('Text 1')).toBeDefined();
  });

  test('should render with custom speed', () => {
    render(<AnimatedText text="Fast text" speed={50} />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
  });

  test('should render with repeat option', () => {
    render(<AnimatedText text="Repeating text" repeat={true} />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
  });

  test('should handle empty text gracefully', () => {
    render(<AnimatedText text="" />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
  });
});