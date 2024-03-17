import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../home/Home';

describe('Home component test', () => {
	test('should render text', () => {
		render(<Home />);

		expect(screen.getByText('Iman Warsame')).toBeDefined();
	});

	// test('social buttons are clicked', async () => {
	// 	render(<Home />);
	// 	global.innerWidth = 5000;
	// 	const user = userEvent.setup();

	// 	const spyAnchorTag = vi.spyOn(user, 'click');

	// 	//Github link
	// 	await user.click(screen.getByAltText('Silhoutte of an octopus cat hybrid'));
	// 	expect(spyAnchorTag).toHaveBeenCalled();

	// 	//LinkedIn link
	// 	await user.click(screen.getByAltText('The letters i and n representing the LinkedIn logo'));
	// 	expect(spyAnchorTag).toHaveBeenCalled();
	// });
});
