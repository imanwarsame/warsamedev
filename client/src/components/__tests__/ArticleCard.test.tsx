import { describe, expect, test, vi, beforeEach } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import ArticleCard from '../articles/ArticleCard';

// Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

const mockProps = {
	title: 'Test Article Title',
	date: '1st Jan 2024',
	url: '/articles/test-article',
};

describe('ArticleCard Component', () => {
	beforeEach(() => {
		mockNavigate.mockClear();
	});

	test('should render article title', () => {
		render(<ArticleCard {...mockProps} />);

		expect(screen.getByText('Test Article Title')).toBeDefined();
	});

	test('should render article date', () => {
		render(<ArticleCard {...mockProps} />);

		expect(screen.getByText('1st Jan 2024')).toBeDefined();
	});

	test('should render read more button', () => {
		render(<ArticleCard {...mockProps} />);

		expect(screen.getByText('Read more')).toBeDefined();
	});

	test('should navigate to article when clicked', () => {
		render(<ArticleCard {...mockProps} />);

		const readButton = screen.getByText('Read more');
		fireEvent.click(readButton);

		expect(mockNavigate).toHaveBeenCalledWith('/articles/test-article');
	});

	test('should render paper component', () => {
		const { container } = render(<ArticleCard {...mockProps} />);

		expect(container.firstChild).toBeDefined();
	});
});
