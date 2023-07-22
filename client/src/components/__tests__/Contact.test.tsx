import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../contact/Contact';
import userEvent from '@testing-library/user-event';

describe('Contact component test', () => {
	test('should render text', () => {
		render(<Contact/>);

		expect(screen.getByText(/Get in touch!/i)).toBeDefined();
	});
	test('the input field and its props', () => {
		render(<Contact/>);
		const input = document.querySelector('#user_email') as HTMLInputElement | null;

		//Input exists in the form component
		expect(input).toBeTruthy();

		//Is empty
		expect(input?.textContent).toBe('');

		if (input) {
			//Test the input text
			input.textContent = 'jane@doe.com';
			expect(input.textContent).toBe('jane@doe.com');

			// test the type prop
			expect(input.type).toBe('email');

			// test the name prop
			expect(input.name).toBe('user_email');

			// test the value prop
			fireEvent.change(input, {
				target: {
					value: 'john@doe.com'
				}
			});
			expect(input.value).toBe('john@doe.com');
		}
	});
	test('submit button is clicked', async () => {
		render(<Contact />);
		const user = userEvent.setup();

		const spyAnchorTag = vi.spyOn(user, 'click');

		//Click button
		await user.click(screen.getByText('Submit'));
		expect(spyAnchorTag).toHaveBeenCalledOnce();
	});
});
