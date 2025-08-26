import { describe, expect, test, vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../../test-utils';
import Projects from '../projects/Projects';

// Mock the projects data
vi.mock('../projects/ProjectsData', () => ({
	projects: [
		{
			id: 1,
			title: 'GPI Designer',
			imageUrl: '/test-image-1.png',
			description: 'This is a test project description',
			technologies: ['React', 'TypeScript', 'Vite'],
			webLink: 'https://test-project-1.com',
			githubLink: 'https://github.com/test/project-1',
			videoUrl: null,
		},
		{
			id: 2,
			title: 'Garviz',
			imageUrl: '/test-image-2.png',
			description: 'Another test project',
			technologies: ['React', 'MUI', 'TypeScript'],
			webLink: 'https://test-project-2.com',
			githubLink: 'https://github.com/test/project-2',
			videoUrl: null,
		},
	],
}));

describe('Projects Component', () => {
	test('should render section title', () => {
		render(<Projects />);

		expect(screen.getByText('Projects')).toBeDefined();
	});

	test('should render section badge', () => {
		render(<Projects />);

		const badge = screen.getByText('Projects');
		expect(badge.closest('.mantine-Badge-root')).toBeDefined();
	});

	test('should render main heading', () => {
		render(<Projects />);

		expect(screen.getByText('Featured Work')).toBeDefined();
	});

	test('should render project cards', async () => {
		render(<Projects />);

		await waitFor(() => {
			expect(screen.getByAltText('GPI Designer')).toBeDefined();
			expect(screen.getByAltText('Garviz')).toBeDefined();
		});
	});

	test('should display technology badges', async () => {
		render(<Projects />);

		await waitFor(() => {
			expect(screen.getAllByText('React')).toHaveLength(2); // React appears in both projects
			expect(screen.getAllByText('TypeScript')).toHaveLength(2); // TypeScript appears in both projects
			expect(screen.getByText('Vite')).toBeDefined(); // Vite only appears in first project
		});
	});

	test('should open project modal when project is clicked', async () => {
		render(<Projects />);

		await waitFor(() => {
			const projectCard = screen.getByAltText('GPI Designer').closest('.mantine-Paper-root');
			expect(projectCard).toBeDefined();

			if (projectCard) {
				fireEvent.click(projectCard);
			}
		});
	});

	test('should render project links', async () => {
		render(<Projects />);

		await waitFor(() => {
			const webLinks = screen.getAllByRole('link');
			const hasGithubLink = webLinks.some((link) =>
				link.getAttribute('href')?.includes('github.com'),
			);
			const hasWebLink = webLinks.some((link) =>
				link.getAttribute('href')?.includes('test-project'),
			);

			expect(hasGithubLink).toBe(true);
			expect(hasWebLink).toBe(true);
		});
	});
});
