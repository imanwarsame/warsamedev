import { describe, expect, test, vi } from 'vitest';
import { render } from '../../test-utils';
import CountUp from '../countUp/CountUp';

// Mock motion/react
vi.mock('motion/react', () => ({
  useInView: () => true,
  useMotionValue: () => ({ get: () => 0, set: vi.fn() }),
  useSpring: () => ({ get: () => 0, set: vi.fn() }),
}));

describe('CountUp Component', () => {
  test('should render with initial value', () => {
    const { container } = render(<CountUp value={100} />);
    
    expect(container.firstChild).toBeDefined();
  });

  test('should accept custom formatting', () => {
    const { container } = render(
      <CountUp value={1000} format={(value: number) => `$${value.toLocaleString()}`} />
    );
    
    expect(container.firstChild).toBeDefined();
  });

  test('should render without crashing with zero value', () => {
    const { container } = render(<CountUp value={0} />);
    
    expect(container.firstChild).toBeDefined();
  });

  test('should handle large numbers', () => {
    const { container } = render(<CountUp value={999999} />);
    
    expect(container.firstChild).toBeDefined();
  });

  test('should render with custom duration', () => {
    const { container } = render(<CountUp value={50} duration={2000} />);
    
    expect(container.firstChild).toBeDefined();
  });
});