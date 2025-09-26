import GPI from '../../assets/Projects/GPI.webp';
import Garviz from '../../assets/Projects/Garviz.webp';
import EnergyPlanner from '../../assets/Projects/EnergyPlanner.webp';
import EnergyPlannerVideo from '../../assets/Projects/EnergyPlanner.mp4';
import { Project } from './Projects';

export const projects: Project[] = [
	{
		title: 'GPI Designer',
		imageUrl: GPI,
		webLink: 'https://designer.groundplug.dk/',
		githubLink: null,
		description:
			'Three JS-based 3D web application for designing decking solutions with Ground Plug International&apos;s innovative foundation systems. Features real-time 3D rendering, quantity take offs for quotations, material optimisation, and drawing generation for GPI reps.',
		technologies: ['React', 'TypeScript', 'Three.js', 'ASP.NET', 'C#', 'MUI', 'Vite'],
		videoUrl: null,
	},
	{
		title: 'Garviz',
		imageUrl: Garviz,
		webLink: 'https://garviz.netlify.app/',
		githubLink: 'https://github.com/imanwarsame/garvizlanding',
		description:
			'Landing page for Garviz, a platform for gathering, visualising and analysing football data.',
		technologies: ['React', 'MUI', 'TypeScript', 'Vite'],
		videoUrl: null,
	},
	{
		title: 'Energy Planner',
		imageUrl: EnergyPlanner,
		webLink: 'https://energy-planner.netlify.app/',
		githubLink: 'https://github.com/imanwarsame/cityenergyplanner',
		description:
			'A web-based application to identify optimal locations for renewable energy installations in urban areas.',
		technologies: ['TypeScript', 'React', 'MapBox', 'Mantine', 'Vite'],
		videoUrl: EnergyPlannerVideo,
	},
	{
		title: 'AirPave',
		imageUrl: null,
		webLink: null,
		githubLink: null,
		description:
			'Asset management system for airport pavements, allows users to inspect and log defects on site using mobile devices. And plan maintenance activities and generate recommendations for airport owners. Confidential project.',
		technologies: [
			'React',
			'TypeScript',
			'ASP.NET',
			'C#',
			'Mantine',
			'SQL Server',
			'Azure',
			'Entity Framework',
			'OpenLayers',
			'MapBox',
		],
		videoUrl: null,
	},
	{
		title: 'LEAP',
		imageUrl: null,
		webLink: null,
		githubLink: null,
		description:
			'LEAP is a web-based tool for cost benefit analyses centred around liveability and place indicators. Project controls integrated with Entra ID. Project timeline that stores snapshots every time a change is made. Advanced analysis on data such as sensitivity analyses and tipping point analyses. Confidential project.',
		technologies: [
			'React',
			'TypeScript',
			'ASP.NET',
			'C#',
			'Mantine',
			'SQL Server',
			'Azure',
			'Entity Framework',
		],
		videoUrl: null,
	},
	{
		title: 'WASP',
		imageUrl: null,
		webLink: null,
		githubLink: null,
		description:
			'WASP is a desktop application that integrates with Plaxis 2D. An application for automating the design of single and twin embedded retaining walls. Confidential project.',
		technologies: ['Avalonia', 'C#', 'MVVM', 'Python'],
		videoUrl: null,
	},
];
