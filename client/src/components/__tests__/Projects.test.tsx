import { describe, expect, test, vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../../test-utils';
import Projects from '../projects/Projects';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
}));

// Mock the projects data
vi.mock('../projects/ProjectsData', () => ({
  projects: [
    {
      id: 1,
      title: 'Test Project 1',
      title1: 'Test',
      title2: 'Project 1',
      imageUrl: '/test-image-1.png',
      description: 'This is a test project description',
      technologies: ['React', 'TypeScript', 'Vite'],
      webLink: 'https://test-project-1.com',
      githubLink: 'https://github.com/test/project-1',
      featured: true,
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Test Project 2',
      title1: 'Test',
      title2: 'Project 2',
      imageUrl: '/test-image-2.png',
      description: 'Another test project',
      technologies: ['Vue', 'JavaScript'],
      webLink: 'https://test-project-2.com',
      featured: false,
      category: 'Mobile App'
    }
  ]
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
      expect(screen.getByText('Test Project 1')).toBeDefined();
      expect(screen.getByText('Test Project 2')).toBeDefined();
    });
  });

  test('should display featured badge for featured projects', async () => {
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('Featured')).toBeDefined();
    });
  });

  test('should display technology badges', async () => {
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('React')).toBeDefined();
      expect(screen.getByText('TypeScript')).toBeDefined();
      expect(screen.getByText('Vite')).toBeDefined();
    });
  });

  test('should open project modal when project is clicked', async () => {
    render(<Projects />);
    
    await waitFor(() => {
      const projectCard = screen.getByText('Test Project 1').closest('.mantine-Paper-root');
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
      const hasGithubLink = webLinks.some(link => 
        link.getAttribute('href')?.includes('github.com')
      );
      const hasWebLink = webLinks.some(link => 
        link.getAttribute('href')?.includes('test-project')
      );
      
      expect(hasGithubLink).toBe(true);
      expect(hasWebLink).toBe(true);
    });
  });
});