import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../experience/Experience';

describe('Experience components test', () => {
	test('should render work experience text', () => {
		render(<Experience />);

		expect(screen.getByText(/Senior Engineer/i)).toBeDefined();
		expect(screen.getByText(/Civil Engineering, MEng/i)).toBeDefined();
	});
});
