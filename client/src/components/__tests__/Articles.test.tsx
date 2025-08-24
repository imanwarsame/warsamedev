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
  default: ({ title, date, url }: any) => (
    <div data-testid="article-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{url}</p>
    </div>
  )
}));

// Mock articles data
vi.mock('../articles/ArticlesData', () => {
  const mockMoment = {
    format: (format?: string) => '1st Jan 2024',
    diff: () => 0,
    unix: () => 1640995200,
    valueOf: () => 1640995200000,
    toDate: () => new Date('2024-01-01'),
    isAfter: () => false,
    isBefore: () => false,
    isSame: () => true
  };

  return {
    articles: [
      {
        id: '1',
        title: 'Test Article 1',
        date: mockMoment,
        url: '/articles/test-article-1',
        mdFile: 'test-article-1.md'
      },
      {
        id: '2',
        title: 'Test Article 2',
        date: mockMoment,
        url: '/articles/test-article-2',
        mdFile: 'test-article-2.md'
      }
    ]
  };
});

// Mock moment
vi.mock('moment', () => {
  const mockMoment = (date?: string) => ({
    format: (format?: string) => '1st Jan 2024',
    fromNow: () => 'a few days ago',
    diff: (other: any) => 0,
    unix: () => 1640995200,
    valueOf: () => 1640995200000,
    toDate: () => new Date('2024-01-01'),
    isAfter: () => false,
    isBefore: () => false,
    isSame: () => true
  });
  
  return {
    default: mockMoment,
    __esModule: true
  };
});

describe('Articles Component', () => {
  test('should render articles page', () => {
    render(<Articles />);
    
    // Component should render without errors
    expect(screen.getAllByTestId('article-card')).toBeDefined();
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

  test('should display article dates', () => {
    render(<Articles />);
    
    expect(screen.getAllByText('1st Jan 2024')).toBeDefined();
  });
});