import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export const articles = [
	{
		id: uuidv4(),
		title: 'AI and Failure',
		date: moment('2024-03-23'),
		url: '/articles/ai-and-failure',
		mdFile: 'AIandFailure',
	},
	{
		id: uuidv4(),
		title: 'Open Source Software in the AECO Industry',
		date: moment('2024-06-01'),
		url: '/articles/oss-in-aeco',
		mdFile: 'OSS',
	},
	{
		id: uuidv4(),
		title: 'Navigating Problem Validation in AECO',
		date: moment('2024-06-09'),
		url: '/articles/problem-validation',
		mdFile: 'MumTest',
	},
	{
		id: uuidv4(),
		title: 'Mastering the art of Festina Lente in Project Management',
		date: moment('2024-06-23'),
		url: '/articles/festina-lente-project-management',
		mdFile: 'FestinaLente',
	},
	{
		id: uuidv4(),
		title: 'Unlocking Innovation in the AECO Sector: Rethinking Incentives',
		date: moment('2024-06-30'),
		url: '/articles/value-based-pricing',
		mdFile: 'ValueBasedPricing',
	},
	{
		id: uuidv4(),
		title: 'Setting up Visual Studio Code with Python',
		date: moment('2024-08-17'),
		url: '/articles/setting-up-vs-code-and-python',
		mdFile: 'SettingUpPythonInVSCode',
	},
];
