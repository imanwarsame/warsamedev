import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import Articles from '../articles/Articles';

// Mock ArticleCard component
vi.mock('../articles/ArticleCard', () => ({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: ({ title, date, url }: any) => (
		<div data-testid='article-card'>
			<h3>{title}</h3>
			<p>{date}</p>
			<p>{url}</p>
		</div>
	),
}));

// Mock useArticles hook
vi.mock('../../hooks/useArticles', () => ({
	useArticles: () => ({
		articles: [
			{
				id: '1',
				title: 'Test Article 1',
				date: '2024-01-01',
				url: '/articles/test-article-1',
				mdFile: 'test-article-1',
			},
			{
				id: '2',
				title: 'Test Article 2',
				date: '2024-01-01',
				url: '/articles/test-article-2',
				mdFile: 'test-article-2',
			},
		],
		loading: false,
	}),
}));

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

		expect(screen.getAllByText('1 Jan 2024')).toBeDefined();
	});
});
