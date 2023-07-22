import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Education from '../experience/Education';
import Work from '../experience/Work';

describe('Experience components test', () => {
	test('should render work experience text', () => {
		render(<Work/>);

		expect(screen.getByText(/Senior Engineer/i)).toBeDefined();
	});
	test('should render academic experience text', () => {
		render(<Education/>);

		expect(screen.getByText(/Civil Engineering, MEng/i)).toBeDefined();
	});
});
