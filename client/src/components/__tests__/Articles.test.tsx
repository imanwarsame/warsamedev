import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import Articles from '../articles/Articles';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  }
}));

// Mock ArticleCard component
vi.mock('../articles/ArticleCard', () => ({
  default: ({ article }: any) => (
    <div data-testid="article-card">
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
    </div>
  )
}));

// Mock articles data
vi.mock('../articles/ArticlesData', () => ({
  articles: [
    {
      id: '1',
      title: 'Test Article 1',
      summary: 'This is a test article summary',
      createdAt: '2024-01-01',
      readTime: '5 min read',
      tags: ['React', 'Testing'],
      url: '/articles/test-article-1',
      mdFile: 'test-article-1.md'
    },
    {
      id: '2',
      title: 'Test Article 2',
      summary: 'Another test article',
      createdAt: '2024-01-02',
      readTime: '3 min read',
      tags: ['TypeScript'],
      url: '/articles/test-article-2',
      mdFile: 'test-article-2.md'
    }
  ]
}));

// Mock moment
vi.mock('moment', () => ({
  default: (date: string) => ({
    format: () => '2024-01-01',
    fromNow: () => 'a few days ago'
  })
}));

describe('Articles Component', () => {
  test('should render articles page', () => {
    render(<Articles />);
    
    // Component should render without errors
    expect(screen.getByTestId('article-card')).toBeDefined();
  });

  test('should render all article cards', () => {
    render(<Articles />);
    
    const articleCards = screen.getAllByTestId('article-card');
    expect(articleCards).toHaveLength(2);
  });

  test('should display article titles', () => {
    render(<Articles />);
    
    expect(screen.getByText('Test Article 1')).toBeDefined();
    expect(screen.getByText('Test Article 2')).toBeDefined();
  });

  test('should display article summaries', () => {
    render(<Articles />);
    
    expect(screen.getByText('This is a test article summary')).toBeDefined();
    expect(screen.getByText('Another test article')).toBeDefined();
  });
});