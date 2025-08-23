import { describe, expect, test, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import ArticleCard from '../articles/ArticleCard';

// Mock framer-motion
vi.mock('framer-motion', () => ({
	motion: {
		div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
	},
}));

// Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual('react-router-dom');
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

const mockArticle = {
	id: '1',
	title: 'Test Article Title',
	summary: 'This is a test article summary that describes the content.',
	createdAt: '2024-01-01T00:00:00Z',
	readTime: '5 min read',
	tags: ['React', 'Testing', 'TypeScript'],
	url: '/articles/test-article',
	mdFile: 'test-article.md',
};

describe('ArticleCard Component', () => {
	beforeEach(() => {
		mockNavigate.mockClear();
	});

	test('should render article title', () => {
		render(<ArticleCard article={mockArticle} />);

		expect(screen.getByText('Test Article Title')).toBeDefined();
	});

	test('should render article summary', () => {
		render(<ArticleCard article={mockArticle} />);

		expect(
			screen.getByText('This is a test article summary that describes the content.'),
		).toBeDefined();
	});

	test('should render read time', () => {
		render(<ArticleCard article={mockArticle} />);

		expect(screen.getByText('5 min read')).toBeDefined();
	});

	test('should render tags', () => {
		render(<ArticleCard article={mockArticle} />);

		expect(screen.getByText('React')).toBeDefined();
		expect(screen.getByText('Testing')).toBeDefined();
		expect(screen.getByText('TypeScript')).toBeDefined();
	});

	test('should render read article button', () => {
		render(<ArticleCard article={mockArticle} />);

		expect(screen.getByText('Read Article')).toBeDefined();
	});

	test('should navigate to article when button is clicked', () => {
		render(<ArticleCard article={mockArticle} />);

		const readButton = screen.getByText('Read Article');
		fireEvent.click(readButton);

		expect(mockNavigate).toHaveBeenCalledWith('/articles/test-article');
	});

	test('should render article card with proper structure', () => {
		const { container } = render(<ArticleCard article={mockArticle} />);

		expect(container.firstChild).toBeDefined();
	});
});
