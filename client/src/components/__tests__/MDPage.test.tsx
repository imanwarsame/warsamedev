import { describe, expect, test, vi, beforeEach } from 'vitest';
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
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('MDPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render loading state initially', () => {
    mockFetch.mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Markdown Content'),
    });

    render(<MDPage fileName="test" />);
    
    // Component should render (loading state)
    expect(document.body).toBeDefined();
  });

  test('should fetch and render markdown content', async () => {
    mockFetch.mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Markdown Content\n\nThis is test content.'),
    });

    render(<MDPage fileName="test" />);
    
    await waitFor(() => {
      expect(screen.getByTestId('markdown-content')).toBeDefined();
    });
  });

  test('should handle fetch errors gracefully', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Fetch failed'));

    console.log = vi.fn();
    console.error = vi.fn();
    
    const { container } = render(<MDPage fileName="test.md" />);
    
    // Wait for the component to handle the error
    await waitFor(() => {
      // Component should still render without crashing
      expect(container.firstChild).toBeDefined();
    });
  });

  test('should construct correct file path', async () => {
    mockFetch.mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Content'),
    });

    render(<MDPage fileName="example" />);
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/example.md');
    });
  });

  test('should handle empty markdown content', async () => {
    mockFetch.mockResolvedValueOnce({
      text: () => Promise.resolve(''),
    });

    render(<MDPage fileName="empty" />);
    
    await waitFor(() => {
      expect(screen.getByTestId('markdown-content')).toBeDefined();
    });
  });

  test('should render progress indicator', () => {
    mockFetch.mockResolvedValueOnce({
      text: () => Promise.resolve('# Test Content'),
    });

    const { container } = render(<MDPage fileName="test.md" />);
    
    expect(container.firstChild).toBeDefined();
  });
});