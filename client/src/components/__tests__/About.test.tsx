import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import About from '../about/About';

// Mock fetch function
(global as any).fetch = () => {
	return Promise.resolve({
		blob: () => Promise.resolve(new Blob()),
	}) as any;
};

// Mock URL.createObjectURL function
(global as any).URL.createObjectURL = () => 'CV.pdf';

describe('About component test', () => {
	test('should render text', () => {

		render(<About/>);

		expect(screen.getByText(/Hi! My name is Iman, I'm a senior software and civil engineer at Ramboll/i)).toBeDefined();
	});
	test('download CV button clicked once', async () => {
		render(<About />);
		const user = userEvent.setup();

		const spyAnchorTag = vi.spyOn(user, 'click');
		await user.click(screen.getByText('Download CV'));

		expect(spyAnchorTag).toHaveBeenCalledOnce();
	});
});
