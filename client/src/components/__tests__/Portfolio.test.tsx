import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import WarsameStudio from '../../assets/WarsameStudio.png';
import Card from '../portfolio/Card/Card';

const dummyData = {
	id: 1,
	title: 'Warsame Studio',
	imageUrl: WarsameStudio,
	description: 'Architectural photography portfolio built using Next.JS and Typescript',
	githubLink: 'https://github.com/imanwarsame/warsamestudio',
	webLink: 'https://warsame.studio/',
};

describe('Portfolio component test', () => {
	test('should render card', () => {
		const card = render(<Card {...dummyData} key={dummyData.id}/>);

		expect(card).toBeTruthy();
	});
});
