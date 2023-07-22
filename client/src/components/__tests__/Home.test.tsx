import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import Home from '../home/Home';

describe('Home component test', () => {
	test('should render text', () => {

		render(<Home/>);

		expect(screen.getByText(/Full Stack Developer | Civil Engineer | Architectural Photographer/i)).toBeDefined();
	});
	test('social buttons are clicked', async () => {
		render(<Home />);
		const user = userEvent.setup();

		const spyAnchorTag = vi.spyOn(user, 'click');

		//Github link
		await user.click(screen.getByAltText('Silhoutte of an octopus cat hybrid'));
		expect(spyAnchorTag).toHaveBeenCalled();

		//Twitter link
		await user.click(screen.getByAltText('Twitter logo of tweeting bird'));
		expect(spyAnchorTag).toHaveBeenCalled();

		//LinkedIn link
		await user.click(screen.getByAltText('The letters i and n representing the LinkedIn logo'));
		expect(spyAnchorTag).toHaveBeenCalled();
	});
});
