import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export const articles = [
	{
		id: uuidv4(),
		title: 'AI and failure',
		date: moment('2024-03-23'),
		url: '/articles/ai-and-failure',
		mdFile: 'AIandFailure',
	},
];
