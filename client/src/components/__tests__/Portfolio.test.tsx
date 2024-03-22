import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import WarsameStudio from '../../assets/Projects/WarsameStudio.png';
import Project from '../portfolio/Project';

const dummyData = {
	id: 1,
	title1: 'Warsame',
	title2: 'Studio',
	imageUrl: WarsameStudio,
	githubLink: 'https://github.com/imanwarsame/warsamestudio',
	webLink: 'https://warsame.studio/',
};

describe('Portfolio component test', () => {
	test('should render card', () => {
		const card = render(<Project {...dummyData} key={dummyData.id} />);

		expect(card).toBeTruthy();
		expect(screen.getByText('Warsame')).toBeDefined();
		expect(screen.getByText('Studio')).toBeDefined();
	});
});
