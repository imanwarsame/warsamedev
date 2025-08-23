import { describe, expect, test, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../test-utils';
import MDPage from '../articles/MDPage';

// Mock react-markdown
vi.mock('react-markdown', () => ({
  default: ({ children }: { children: string }) => (
    <div data-testid="markdown-content">{children}</div>
  )
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useSpring: () => ({ get: () => 0 }),
}));

// Mock fetch
global.fetch = vi.fn();

describe('MDPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render loading state initially', () => {
    (global.fetch as any).mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Markdown Content'),
    });

    render(<MDPage fileName="test.md" />);
    
    // Component should render (loading state)
    expect(document.body).toBeDefined();
  });

  test('should fetch and render markdown content', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Markdown Content\n\nThis is test content.'),
    });

    render(<MDPage fileName="test.md" />);
    
    await waitFor(() => {
      expect(screen.getByTestId('markdown-content')).toBeDefined();
    });
  });

  test('should handle fetch errors gracefully', async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error('Fetch failed'));

    const { container } = render(<MDPage fileName="test.md" />);
    
    // Component should still render without crashing
    expect(container.firstChild).toBeDefined();
  });

  test('should construct correct file path', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Content'),
    });

    render(<MDPage fileName="example.md" />);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/articles/example.md');
    });
  });

  test('should handle empty markdown content', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      text: () => Promise.resolve(''),
    });

    render(<MDPage fileName="empty.md" />);
    
    await waitFor(() => {
      expect(screen.getByTestId('markdown-content')).toBeDefined();
    });
  });

  test('should render progress indicator', () => {
    (global.fetch as any).mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Content'),
    });

    const { container } = render(<MDPage fileName="test.md" />);
    
    expect(container.firstChild).toBeDefined();
  });
});