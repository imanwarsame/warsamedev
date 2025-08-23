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
  test('should render with array of items', () => {
    const items = ['Hello World', 'Test Text'];
    render(<AnimatedText items={items} />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
  });

  test('should render with multiple text items', () => {
    const items = ['Text 1', 'Text 2', 'Text 3'];
    render(<AnimatedText items={items} />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
  });

  test('should render with single item', () => {
    const items = ['Single text'];
    render(<AnimatedText items={items} />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
  });

  test('should handle empty array gracefully', () => {
    render(<AnimatedText items={[]} />);
    
    expect(screen.getByTestId('type-animation')).toBeDefined();
  });

  test('should render within a Box container', () => {
    const items = ['Container test'];
    const { container } = render(<AnimatedText items={items} />);
    
    expect(container.firstChild).toBeDefined();
  });
});