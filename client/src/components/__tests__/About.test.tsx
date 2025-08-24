import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import About from '../about/About';

// Mock CountUp component
vi.mock('../countUp/CountUp', () => ({
  default: ({ value }: { value: number }) => <span data-testid="count-up">{value}</span>
}));

// Mock framer-motion with all necessary exports
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
      p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    },
    useInView: () => true,
    useTransform: () => 0,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  };
});

describe('About Component', () => {
  test('should render section badge', () => {
    render(<About />);
    
    expect(screen.getByText('About Me')).toBeDefined();
  });

  test('should render main heading', () => {
    render(<About />);
    
    expect(screen.getByText('Bridging Engineering & Technology')).toBeDefined();
  });

  test('should render about description', () => {
    render(<About />);
    
    expect(screen.getByText(/Hi! I'm Iman, a multidisciplinary professional/i)).toBeDefined();
  });

  test('should render role cards', () => {
    render(<About />);
    
    expect(screen.getByText('Full Stack Developer')).toBeDefined();
    expect(screen.getByText('Product Owner')).toBeDefined();
    expect(screen.getByText('Chartered Civil Engineer')).toBeDefined();
  });

  test('should render skill badges', () => {
    render(<About />);
    
    // Check for some key skills
    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByText('TypeScript')).toBeDefined();
    expect(screen.getByText('Node.js')).toBeDefined();
    expect(screen.getByText('Agile')).toBeDefined();
  });

  test('should render stats with CountUp components', () => {
    render(<About />);
    
    const countUpElements = screen.getAllByTestId('count-up');
    expect(countUpElements.length).toBeGreaterThan(0);
  });

  test('should render impact section', () => {
    render(<About />);
    
    expect(screen.getByText('Driven by Impact')).toBeDefined();
    expect(screen.getByText(/I'm passionate about creating technology/i)).toBeDefined();
  });

  test('should render with proper structure', () => {
    const { container } = render(<About />);
    
    expect(container.firstChild).toBeDefined();
  });
});
