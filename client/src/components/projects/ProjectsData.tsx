import GPI from '../../assets/Projects/GPI.png';
import Garviz from '../../assets/Projects/Garviz.png';
import EnergyPlanner from '../../assets/Projects/EnergyPlanner.png';
import EnergyPlannerVideo from '../../assets/Projects/EnergyPlanner.mp4';
import { Project } from './Projects';

export const projects: Project[] = [
	{
		id: 1,
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
		id: 2,
		title: 'Garviz',
		imageUrl: Garviz,
		webLink: 'https://garviz.net/',
		githubLink: 'https://github.com/imanwarsame/garvizlanding',
		description:
			'Landing page for Garviz, a platform for gathering, visualising and analysing football data.',
		technologies: ['React', 'MUI', 'TypeScript', 'Vite'],
		videoUrl: null,
	},
	{
		id: 3,
		title: 'Energy Planner',
		imageUrl: EnergyPlanner,
		webLink: 'https://energy-planner.netlify.app/',
		githubLink: 'https://github.com/imanwarsame/cityenergyplanner',
		videoUrl: EnergyPlannerVideo,
		description:
			'A web-based application to identify optimal locations for renewable energy installations in urban areas.',
		technologies: ['TypeScript', 'React', 'MapBox', 'Mantine', 'Vite'],
	},
];
