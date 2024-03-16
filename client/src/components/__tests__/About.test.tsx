import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../about/About';

describe('About component test', () => {
	test('should render text', () => {
		render(<About />);

		expect(
			screen.getByText(
				/Hi! My name is Iman, I'm a senior software and civil engineer at Ramboll/i,
			),
		).toBeDefined();
	});
});
