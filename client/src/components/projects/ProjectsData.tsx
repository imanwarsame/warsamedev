import GPI from '../../assets/Projects/GPI.webp';
import Garviz from '../../assets/Projects/Garviz.webp';
import EnergyPlanner from '../../assets/Projects/EnergyPlanner.webp';
import HS2 from '../../assets/Projects/HS2.webp';
import Genoa from '../../assets/Projects/Genoa.webp';
import EnergyPlannerVideo from '../../assets/Projects/EnergyPlanner.mp4';
import { Project } from './Projects';

/**
 * Projects data configuration
 *
 * Video URL supports:
 * - Local video files: './assets/Projects/video.mp4'
 * - YouTube videos: 'https://www.youtube.com/watch?v=VIDEO_ID' or 'https://youtu.be/VIDEO_ID'
 * - Null: No video
 *
 * The component will automatically detect the video type and render appropriately:
 * - YouTube videos: Embedded iframe with YouTube branding
 * - Local videos: HTML5 video player with controls
 */

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
	{
		title: 'HS2',
		imageUrl: HS2,
		webLink: 'https://www.bbc.com/news/articles/ce784xdg47do',
		githubLink: null,
		description:
			'HS2 is a high-speed rail project in the UK. I worked on several aspects including; cat III design checks of Carol Green Rail Underbridge (see video), assistnat project manager for SL8 managing > £3M worth of work and around 40 assets with teams across multiple companies, prototyping web based project management platform to manage disparate data sources and provide a single source of truth for the project team. Total project value £67-87 billion.',
		technologies: ['React', 'JavaScript', 'ASP.NET', 'C#', 'MongoDB', 'Azure'],
		videoUrl:
			'https://www.youtube.com/watch?v=Sl84gfVv5FA&list=PLQHXGU97P0FJ4cdR_sB669tRAv0f5em8_&index=1',
	},
	{
		title: 'Genoa Breakwater',
		imageUrl: Genoa,
		webLink:
			'https://www.webuildgroup.com/en/projects/dams-hydroelectric-plants/genoa-s-new-breakwater/',
		githubLink: null,
		description:
			'The Port of Genoa is building a new breakwater, which will be the deepest in Europe and one of the deepest in the world, designed to guarantee direct access to the terminal facilities and a wide turning basin for ultra-large ships. I contributed to the parametric design system for the concrete caissons. Total project value €937 million.',
		technologies: ['Sofistik'],
		videoUrl: 'https://www.youtube.com/watch?v=CZL7jlurelY',
	},
];
